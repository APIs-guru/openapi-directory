from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1serializedpolicytag


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1SerializedPolicyTag:
    child_policy_tags: Optional[List[googleclouddatacatalogv1serializedpolicytag.GoogleCloudDatacatalogV1SerializedPolicyTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPolicyTags' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    policy_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTag' }})
    
