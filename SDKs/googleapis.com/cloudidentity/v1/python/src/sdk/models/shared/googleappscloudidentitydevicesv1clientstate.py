from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleappscloudidentitydevicesv1customattributevalue

class GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum(str, Enum):
    COMPLIANCE_STATE_UNSPECIFIED = "COMPLIANCE_STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"

class GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum(str, Enum):
    HEALTH_SCORE_UNSPECIFIED = "HEALTH_SCORE_UNSPECIFIED"
    VERY_POOR = "VERY_POOR"
    POOR = "POOR"
    NEUTRAL = "NEUTRAL"
    GOOD = "GOOD"
    VERY_GOOD = "VERY_GOOD"

class GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum(str, Enum):
    MANAGED_STATE_UNSPECIFIED = "MANAGED_STATE_UNSPECIFIED"
    MANAGED = "MANAGED"
    UNMANAGED = "UNMANAGED"

class GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum(str, Enum):
    OWNER_TYPE_UNSPECIFIED = "OWNER_TYPE_UNSPECIFIED"
    OWNER_TYPE_CUSTOMER = "OWNER_TYPE_CUSTOMER"
    OWNER_TYPE_PARTNER = "OWNER_TYPE_PARTNER"


@dataclass_json
@dataclass
class GoogleAppsCloudidentityDevicesV1ClientState:
    asset_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetTags' }})
    compliance_state: Optional[GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceState' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    custom_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customId' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    health_score: Optional[GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthScore' }})
    key_value_pairs: Optional[dict[str, googleappscloudidentitydevicesv1customattributevalue.GoogleAppsCloudidentityDevicesV1CustomAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValuePairs' }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    managed: Optional[GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_type: Optional[GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerType' }})
    score_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreReason' }})
    
