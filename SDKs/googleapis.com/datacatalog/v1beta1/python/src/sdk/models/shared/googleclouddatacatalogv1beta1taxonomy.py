from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum(str, Enum):
    POLICY_TYPE_UNSPECIFIED = "POLICY_TYPE_UNSPECIFIED"
    FINE_GRAINED_ACCESS_CONTROL = "FINE_GRAINED_ACCESS_CONTROL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1Taxonomy:
    r"""GoogleCloudDatacatalogV1beta1Taxonomy
    A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
    """
    
    activated_policy_types: Optional[List[GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activatedPolicyTypes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policy_tag_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTagCount') }})
    taxonomy_timestamps: Optional[GoogleCloudDatacatalogV1beta1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomyTimestamps') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1TaxonomyInput:
    r"""GoogleCloudDatacatalogV1beta1TaxonomyInput
    A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
    """
    
    activated_policy_types: Optional[List[GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activatedPolicyTypes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    taxonomy_timestamps: Optional[GoogleCloudDatacatalogV1beta1SystemTimestampsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomyTimestamps') }})
    
