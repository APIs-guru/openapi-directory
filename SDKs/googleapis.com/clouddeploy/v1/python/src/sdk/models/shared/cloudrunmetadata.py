from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudRunMetadata:
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    service_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceUrls' }})
    
