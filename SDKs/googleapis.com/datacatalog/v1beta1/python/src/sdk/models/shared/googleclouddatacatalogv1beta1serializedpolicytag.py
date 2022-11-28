from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1SerializedPolicyTag:
    r"""GoogleCloudDatacatalogV1beta1SerializedPolicyTag
    Message representing one policy tag when exported as a nested proto.
    """
    
    child_policy_tags: Optional[List[GoogleCloudDatacatalogV1beta1SerializedPolicyTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicyTags') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    policy_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTag') }})
    
