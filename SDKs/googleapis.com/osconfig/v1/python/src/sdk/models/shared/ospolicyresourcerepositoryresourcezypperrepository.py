from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OsPolicyResourceRepositoryResourceZypperRepository:
    base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseUrl' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    gpg_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpgKeys' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
