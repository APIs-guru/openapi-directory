from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import obrisk1


@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3DataInitiation:
    creditor_account: ObWriteDomesticStandingOrder3DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    debtor_account: Optional[ObWriteDomesticStandingOrder3DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    final_payment_amount: Optional[ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentAmount' }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_amount: ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentAmount' }})
    first_payment_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfPayments' }})
    recurring_payment_amount: Optional[ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurringPaymentAmount' }})
    recurring_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurringPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3Data:
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    initiation: ObWriteDomesticStandingOrder3DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticStandingOrder3:
    data: ObWriteDomesticStandingOrder3Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    risk: obrisk1.ObRisk1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
