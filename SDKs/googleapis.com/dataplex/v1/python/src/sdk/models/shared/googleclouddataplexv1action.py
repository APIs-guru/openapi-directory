from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1actionfailedsecuritypolicyapply
from . import googleclouddataplexv1actionincompatibledataschema
from . import googleclouddataplexv1actioninvaliddataformat
from . import googleclouddataplexv1actioninvaliddatapartition

class GoogleCloudDataplexV1ActionCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    RESOURCE_MANAGEMENT = "RESOURCE_MANAGEMENT"
    SECURITY_POLICY = "SECURITY_POLICY"
    DATA_DISCOVERY = "DATA_DISCOVERY"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Action:
    asset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    category: Optional[GoogleCloudDataplexV1ActionCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    data_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataLocations' }})
    detect_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectTime' }})
    failed_security_policy_apply: Optional[googleclouddataplexv1actionfailedsecuritypolicyapply.GoogleCloudDataplexV1ActionFailedSecurityPolicyApply] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedSecurityPolicyApply' }})
    incompatible_data_schema: Optional[googleclouddataplexv1actionincompatibledataschema.GoogleCloudDataplexV1ActionIncompatibleDataSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incompatibleDataSchema' }})
    invalid_data_format: Optional[googleclouddataplexv1actioninvaliddataformat.GoogleCloudDataplexV1ActionInvalidDataFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidDataFormat' }})
    invalid_data_organization: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidDataOrganization' }})
    invalid_data_partition: Optional[googleclouddataplexv1actioninvaliddatapartition.GoogleCloudDataplexV1ActionInvalidDataPartition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidDataPartition' }})
    issue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue' }})
    lake: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lake' }})
    missing_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missingData' }})
    missing_resource: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missingResource' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    unauthorized_resource: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unauthorizedResource' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
