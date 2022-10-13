from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Resource:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    discovery_document_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoveryDocumentUri' }})
    discovery_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoveryName' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUrl' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
