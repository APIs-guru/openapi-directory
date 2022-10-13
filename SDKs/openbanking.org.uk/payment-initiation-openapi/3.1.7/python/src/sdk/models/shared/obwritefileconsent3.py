from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import obscasupportdata1

class ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclass
class ObWriteFileConsent3DataAuthorisation:
    authorisation_type: ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisationType' }})
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteFileConsent3DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteFileConsent3DataInitiationRemittanceInformation:
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unstructured' }})
    

@dataclass_json
@dataclass
class ObWriteFileConsent3DataInitiation:
    control_sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlSum' }})
    debtor_account: Optional[ObWriteFileConsent3DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    file_hash: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileHash' }})
    file_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileReference' }})
    file_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileType' }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalInstrument' }})
    number_of_transactions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfTransactions' }})
    remittance_information: Optional[ObWriteFileConsent3DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemittanceInformation' }})
    requested_execution_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedExecutionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    

@dataclass_json
@dataclass
class ObWriteFileConsent3Data:
    authorisation: Optional[ObWriteFileConsent3DataAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Authorisation' }})
    initiation: ObWriteFileConsent3DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    sca_support_data: Optional[obscasupportdata1.ObscaSupportData1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SCASupportData' }})
    

@dataclass_json
@dataclass
class ObWriteFileConsent3:
    data: ObWriteFileConsent3Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    
