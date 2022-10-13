from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObWriteFile2DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteFile2DataInitiationRemittanceInformation:
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unstructured' }})
    

@dataclass_json
@dataclass
class ObWriteFile2DataInitiation:
    control_sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlSum' }})
    debtor_account: Optional[ObWriteFile2DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    file_hash: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileHash' }})
    file_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileReference' }})
    file_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileType' }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalInstrument' }})
    number_of_transactions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfTransactions' }})
    remittance_information: Optional[ObWriteFile2DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemittanceInformation' }})
    requested_execution_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedExecutionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    

@dataclass_json
@dataclass
class ObWriteFile2Data:
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    initiation: ObWriteFile2DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    

@dataclass_json
@dataclass
class ObWriteFile2:
    data: ObWriteFile2Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    
