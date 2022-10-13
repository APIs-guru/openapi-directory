from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import obpostaladdress6
from . import obscasupportdata1
from . import obrisk1

class ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclass
class ObWriteDomesticConsent4DataAuthorisation:
    authorisation_type: ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisationType' }})
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticConsent4DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticConsent4DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticConsent4DataInitiationInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticConsent4DataInitiationRemittanceInformation:
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unstructured' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticConsent4DataInitiation:
    creditor_account: ObWriteDomesticConsent4DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorPostalAddress' }})
    debtor_account: Optional[ObWriteDomesticConsent4DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    end_to_end_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndToEndIdentification' }})
    instructed_amount: ObWriteDomesticConsent4DataInitiationInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    instruction_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructionIdentification' }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalInstrument' }})
    remittance_information: Optional[ObWriteDomesticConsent4DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemittanceInformation' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
class ObWriteDomesticConsent4DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"


@dataclass_json
@dataclass
class ObWriteDomesticConsent4Data:
    authorisation: Optional[ObWriteDomesticConsent4DataAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Authorisation' }})
    initiation: ObWriteDomesticConsent4DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    read_refund_account: Optional[ObWriteDomesticConsent4DataReadRefundAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadRefundAccount' }})
    sca_support_data: Optional[obscasupportdata1.ObscaSupportData1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SCASupportData' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticConsent4:
    data: ObWriteDomesticConsent4Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    risk: obrisk1.ObRisk1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
