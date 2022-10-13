from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1PolicyTag:
    child_policy_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPolicyTags' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_policy_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentPolicyTag' }})
    
