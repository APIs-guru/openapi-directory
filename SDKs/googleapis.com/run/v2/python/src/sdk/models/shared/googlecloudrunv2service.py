from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2binaryauthorization
from . import googlecloudrunv2condition
from . import googlecloudrunv2revisiontemplate
from . import googlecloudrunv2condition
from . import googlecloudrunv2traffictarget
from . import googlecloudrunv2traffictargetstatus

class GoogleCloudRunV2ServiceIngressEnum(str, Enum):
    INGRESS_TRAFFIC_UNSPECIFIED = "INGRESS_TRAFFIC_UNSPECIFIED"
    INGRESS_TRAFFIC_ALL = "INGRESS_TRAFFIC_ALL"
    INGRESS_TRAFFIC_INTERNAL_ONLY = "INGRESS_TRAFFIC_INTERNAL_ONLY"
    INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"

class GoogleCloudRunV2ServiceLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    PRELAUNCH = "PRELAUNCH"
    EARLY_ACCESS = "EARLY_ACCESS"
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclass
class GoogleCloudRunV2Service:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    binary_authorization: Optional[googlecloudrunv2binaryauthorization.GoogleCloudRunV2BinaryAuthorization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryAuthorization' }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    client_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientVersion' }})
    conditions: Optional[List[googlecloudrunv2condition.GoogleCloudRunV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generation' }})
    ingress: Optional[GoogleCloudRunV2ServiceIngressEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingress' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_modifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifier' }})
    latest_created_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestCreatedRevision' }})
    latest_ready_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestReadyRevision' }})
    launch_stage: Optional[GoogleCloudRunV2ServiceLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    observed_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciling' }})
    template: Optional[googlecloudrunv2revisiontemplate.GoogleCloudRunV2RevisionTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    terminal_condition: Optional[googlecloudrunv2condition.GoogleCloudRunV2Condition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminalCondition' }})
    traffic: Optional[List[googlecloudrunv2traffictarget.GoogleCloudRunV2TrafficTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffic' }})
    traffic_statuses: Optional[List[googlecloudrunv2traffictargetstatus.GoogleCloudRunV2TrafficTargetStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficStatuses' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
