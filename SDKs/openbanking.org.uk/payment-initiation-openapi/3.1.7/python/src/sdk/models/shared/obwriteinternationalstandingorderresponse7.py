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
from . import obpostaladdress6
from . import obpostaladdress6
from . import links
from . import meta


@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataCharges:
    amount: obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    charge_bearer: obchargebearertype1code_enum.ObChargeBearerType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationCreditor:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent:
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataInitiation:
    charge_bearer: Optional[obchargebearertype1code_enum.ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    creditor: Optional[ObWriteInternationalStandingOrderResponse7DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Creditor' }})
    creditor_account: ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    currency_of_transfer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyOfTransfer' }})
    debtor_account: Optional[ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationCountryCode' }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedPurpose' }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    instructed_amount: ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfPayments' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Purpose' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
class ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_FURTHER_AUTHORISATION = "AwaitingFurtherAuthorisation"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation:
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_received: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberReceived' }})
    number_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberRequired' }})
    status: ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataRefundAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataRefundAgent:
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataRefundCreditor:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7DataRefund:
    account: ObWriteInternationalStandingOrderResponse7DataRefundAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Account' }})
    agent: Optional[ObWriteInternationalStandingOrderResponse7DataRefundAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Agent' }})
    creditor: Optional[ObWriteInternationalStandingOrderResponse7DataRefundCreditor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Creditor' }})
    
class ObWriteInternationalStandingOrderResponse7DataStatusEnum(str, Enum):
    CANCELLED = "Cancelled"
    INITIATION_COMPLETED = "InitiationCompleted"
    INITIATION_FAILED = "InitiationFailed"
    INITIATION_PENDING = "InitiationPending"


@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7Data:
    charges: Optional[List[ObWriteInternationalStandingOrderResponse7DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Charges' }})
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debtor: Optional[obcashaccountdebtor4.ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Debtor' }})
    initiation: ObWriteInternationalStandingOrderResponse7DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    international_standing_order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InternationalStandingOrderId' }})
    multi_authorisation: Optional[ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiAuthorisation' }})
    refund: Optional[ObWriteInternationalStandingOrderResponse7DataRefund] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Refund' }})
    status: ObWriteInternationalStandingOrderResponse7DataStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_update_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrderResponse7:
    data: ObWriteInternationalStandingOrderResponse7Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
