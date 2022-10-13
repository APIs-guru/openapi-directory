from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudWebriskV1RiceDeltaEncoding:
    encoded_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encodedData' }})
    entry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryCount' }})
    first_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstValue' }})
    rice_parameter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riceParameter' }})
    
