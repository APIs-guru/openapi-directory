from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1SerializedPolicyTag:
    r"""GoogleCloudDatacatalogV1SerializedPolicyTag
    A nested protocol buffer that represents a policy tag and all its descendants.
    """
    
    child_policy_tags: Optional[List[GoogleCloudDatacatalogV1SerializedPolicyTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicyTags') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    policy_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTag') }})
    
