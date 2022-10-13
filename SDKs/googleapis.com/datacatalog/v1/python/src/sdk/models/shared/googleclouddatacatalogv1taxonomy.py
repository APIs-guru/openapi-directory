from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1systemtimestamps

class GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum(str, Enum):
    POLICY_TYPE_UNSPECIFIED = "POLICY_TYPE_UNSPECIFIED"
    FINE_GRAINED_ACCESS_CONTROL = "FINE_GRAINED_ACCESS_CONTROL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1Taxonomy:
    activated_policy_types: Optional[List[GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activatedPolicyTypes' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policy_tag_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTagCount' }})
    taxonomy_timestamps: Optional[googleclouddatacatalogv1systemtimestamps.GoogleCloudDatacatalogV1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomyTimestamps' }})
    
