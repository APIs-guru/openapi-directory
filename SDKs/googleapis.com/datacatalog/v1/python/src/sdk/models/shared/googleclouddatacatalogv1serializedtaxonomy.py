from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum(str, Enum):
    POLICY_TYPE_UNSPECIFIED = "POLICY_TYPE_UNSPECIFIED"
    FINE_GRAINED_ACCESS_CONTROL = "FINE_GRAINED_ACCESS_CONTROL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1SerializedTaxonomy:
    r"""GoogleCloudDatacatalogV1SerializedTaxonomy
    A nested protocol buffer that represents a taxonomy and the hierarchy of its policy tags. Used for taxonomy replacement, import, and export.
    """
    
    activated_policy_types: Optional[List[GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activatedPolicyTypes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    policy_tags: Optional[List[GoogleCloudDatacatalogV1SerializedPolicyTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTags') }})
    
