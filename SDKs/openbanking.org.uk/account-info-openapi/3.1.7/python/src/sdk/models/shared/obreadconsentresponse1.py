from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ObReadConsentResponse1DataPermissionsEnum(str, Enum):
    READ_ACCOUNTS_BASIC = "ReadAccountsBasic"
    READ_ACCOUNTS_DETAIL = "ReadAccountsDetail"
    READ_BALANCES = "ReadBalances"
    READ_BENEFICIARIES_BASIC = "ReadBeneficiariesBasic"
    READ_BENEFICIARIES_DETAIL = "ReadBeneficiariesDetail"
    READ_DIRECT_DEBITS = "ReadDirectDebits"
    READ_OFFERS = "ReadOffers"
    READ_PAN = "ReadPAN"
    READ_PARTY = "ReadParty"
    READ_PARTY_PSU = "ReadPartyPSU"
    READ_PRODUCTS = "ReadProducts"
    READ_SCHEDULED_PAYMENTS_BASIC = "ReadScheduledPaymentsBasic"
    READ_SCHEDULED_PAYMENTS_DETAIL = "ReadScheduledPaymentsDetail"
    READ_STANDING_ORDERS_BASIC = "ReadStandingOrdersBasic"
    READ_STANDING_ORDERS_DETAIL = "ReadStandingOrdersDetail"
    READ_STATEMENTS_BASIC = "ReadStatementsBasic"
    READ_STATEMENTS_DETAIL = "ReadStatementsDetail"
    READ_TRANSACTIONS_BASIC = "ReadTransactionsBasic"
    READ_TRANSACTIONS_CREDITS = "ReadTransactionsCredits"
    READ_TRANSACTIONS_DEBITS = "ReadTransactionsDebits"
    READ_TRANSACTIONS_DETAIL = "ReadTransactionsDetail"

class ObReadConsentResponse1DataStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    REJECTED = "Rejected"
    REVOKED = "Revoked"


@dataclass_json
@dataclass
class ObReadConsentResponse1Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    permissions: List[ObReadConsentResponse1DataPermissionsEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    status: ObReadConsentResponse1DataStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_from_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionFromDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_to_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionToDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObReadConsentResponse1:
    data: ObReadConsentResponse1Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
