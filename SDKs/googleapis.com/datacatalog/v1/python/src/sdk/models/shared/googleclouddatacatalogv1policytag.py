from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1PolicyTagInput:
    r"""GoogleCloudDatacatalogV1PolicyTagInput
    Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the \"Geolocation\" policy tag contains three children.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    parent_policy_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPolicyTag') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1PolicyTag:
    r"""GoogleCloudDatacatalogV1PolicyTag
    Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the \"Geolocation\" policy tag contains three children.
    """
    
    child_policy_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicyTags') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_policy_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPolicyTag') }})
    
