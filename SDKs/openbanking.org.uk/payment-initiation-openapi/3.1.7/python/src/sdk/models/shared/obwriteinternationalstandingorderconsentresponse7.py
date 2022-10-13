from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount
from . import obchargebearertype1code_enum
from . import obcashaccountdebtor4
from . import obchargebearertype1code_enum
from . import obpostaladdress6
from . import obpostaladdress6
from . import obscasupportdata1
from . import links
from . import meta
from . import obrisk1

class ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation:
    authorisation_type: ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisationType' }})
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataCharges:
    amount: obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    charge_bearer: obchargebearertype1code_enum.ObChargeBearerType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent:
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiation:
    charge_bearer: Optional[obchargebearertype1code_enum.ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    creditor: Optional[ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Creditor' }})
    creditor_account: ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    currency_of_transfer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyOfTransfer' }})
    debtor_account: Optional[ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationCountryCode' }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedPurpose' }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    instructed_amount: ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfPayments' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Purpose' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
class ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum(str, Enum):
    CREATE = "Create"

class ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"

class ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    CONSUMED = "Consumed"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7Data:
    authorisation: Optional[ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Authorisation' }})
    charges: Optional[List[ObWriteInternationalStandingOrderConsentResponse7DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Charges' }})
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cut_off_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CutOffDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debtor: Optional[obcashaccountdebtor4.ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Debtor' }})
    initiation: ObWriteInternationalStandingOrderConsentResponse7DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    permission: ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    read_refund_account: Optional[ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadRefundAccount' }})
    sca_support_data: Optional[obscasupportdata1.ObscaSupportData1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SCASupportData' }})
    status: ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_update_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderConsentResponse7:
    data: ObWriteInternationalStandingOrderConsentResponse7Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    risk: obrisk1.ObRisk1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
