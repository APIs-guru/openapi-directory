from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CSS:
    css_domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cssDomainId' }})
    css_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cssGroupId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    homepage_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homepageUri' }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelIds' }})
    
