from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reportkey
from . import reportmetadata
from . import parameters


@dataclass_json
@dataclass
class Report:
    key: Optional[reportkey.ReportKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    metadata: Optional[reportmetadata.ReportMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    params: Optional[parameters.Parameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    
