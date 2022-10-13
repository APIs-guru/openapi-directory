from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1serializedpolicytag

class GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum(str, Enum):
    POLICY_TYPE_UNSPECIFIED = "POLICY_TYPE_UNSPECIFIED"
    FINE_GRAINED_ACCESS_CONTROL = "FINE_GRAINED_ACCESS_CONTROL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1SerializedTaxonomy:
    activated_policy_types: Optional[List[GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activatedPolicyTypes' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    policy_tags: Optional[List[googleclouddatacatalogv1beta1serializedpolicytag.GoogleCloudDatacatalogV1beta1SerializedPolicyTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTags' }})
    
