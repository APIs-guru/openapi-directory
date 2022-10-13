from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2GcsSource:
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSchema' }})
    input_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputUris' }})
    
