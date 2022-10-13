from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportExportStats:
    calls: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calls' }})
    data_in: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataIn' }})
    data_out: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataOut' }})
    
