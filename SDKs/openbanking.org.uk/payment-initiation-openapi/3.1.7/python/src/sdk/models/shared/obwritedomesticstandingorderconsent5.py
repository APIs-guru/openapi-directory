from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import obscasupportdata1
from . import obrisk1

class ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataAuthorisation:
    authorisation_type: ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisationType' }})
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5DataInitiation:
    creditor_account: ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    debtor_account: Optional[ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    final_payment_amount: Optional[ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentAmount' }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_amount: ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentAmount' }})
    first_payment_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfPayments' }})
    recurring_payment_amount: Optional[ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurringPaymentAmount' }})
    recurring_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurringPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
class ObWriteDomesticStandingOrderConsent5DataPermissionEnum(str, Enum):
    CREATE = "Create"

class ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5Data:
    authorisation: Optional[ObWriteDomesticStandingOrderConsent5DataAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Authorisation' }})
    initiation: ObWriteDomesticStandingOrderConsent5DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    permission: ObWriteDomesticStandingOrderConsent5DataPermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    read_refund_account: Optional[ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadRefundAccount' }})
    sca_support_data: Optional[obscasupportdata1.ObscaSupportData1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SCASupportData' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrderConsent5:
    data: ObWriteDomesticStandingOrderConsent5Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    risk: obrisk1.ObRisk1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
