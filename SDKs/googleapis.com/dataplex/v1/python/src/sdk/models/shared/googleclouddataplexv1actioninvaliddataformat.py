from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ActionInvalidDataFormat:
    expected_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedFormat' }})
    new_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newFormat' }})
    sampled_data_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampledDataLocations' }})
    
