from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1PolicyTag:
    r"""GoogleCloudDatacatalogV1beta1PolicyTag
    Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag \"Geolocation\" contains three child policy tags: \"LatLong\", \"City\", and \"ZipCode\".
    """
    
    child_policy_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicyTags') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_policy_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPolicyTag') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1PolicyTagInput:
    r"""GoogleCloudDatacatalogV1beta1PolicyTagInput
    Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag \"Geolocation\" contains three child policy tags: \"LatLong\", \"City\", and \"ZipCode\".
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    parent_policy_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPolicyTag') }})
    
