from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1StorageProperties:
    file_pattern: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePattern' }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    
