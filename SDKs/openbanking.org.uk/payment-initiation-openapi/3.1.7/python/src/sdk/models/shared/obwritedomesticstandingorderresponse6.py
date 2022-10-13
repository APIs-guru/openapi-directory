from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount
from . import obchargebearertype1code_enum
from . import obcashaccountdebtor4
from . import links
from . import meta


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataCharges:
    amount: obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    charge_bearer: obchargebearertype1code_enum.ObChargeBearerType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiation:
    creditor_account: ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    debtor_account: Optional[ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    final_payment_amount: Optional[ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentAmount' }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_amount: ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentAmount' }})
    first_payment_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfPayments' }})
    recurring_payment_amount: Optional[ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurringPaymentAmount' }})
    recurring_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurringPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
class ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_FURTHER_AUTHORISATION = "AwaitingFurtherAuthorisation"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation:
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_received: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberReceived' }})
    number_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberRequired' }})
    status: ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataRefundAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6DataRefund:
    account: ObWriteDomesticStandingOrderResponse6DataRefundAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Account' }})
    
class ObWriteDomesticStandingOrderResponse6DataStatusEnum(str, Enum):
    CANCELLED = "Cancelled"
    INITIATION_COMPLETED = "InitiationCompleted"
    INITIATION_FAILED = "InitiationFailed"
    INITIATION_PENDING = "InitiationPending"


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6Data:
    charges: Optional[List[ObWriteDomesticStandingOrderResponse6DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Charges' }})
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debtor: Optional[obcashaccountdebtor4.ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Debtor' }})
    domestic_standing_order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomesticStandingOrderId' }})
    initiation: ObWriteDomesticStandingOrderResponse6DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    multi_authorisation: Optional[ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiAuthorisation' }})
    refund: Optional[ObWriteDomesticStandingOrderResponse6DataRefund] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Refund' }})
    status: ObWriteDomesticStandingOrderResponse6DataStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_update_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderResponse6:
    data: ObWriteDomesticStandingOrderResponse6Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
