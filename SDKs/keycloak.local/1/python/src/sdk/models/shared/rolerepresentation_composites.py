from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RoleRepresentationComposites:
    client: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    realm: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realm' }})
    
