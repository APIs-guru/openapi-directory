from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import buildartifact
from . import deliverypipeline
from . import targetartifact
from . import targetrender
from . import target

class ReleaseRenderStateEnum(str, Enum):
    RENDER_STATE_UNSPECIFIED = "RENDER_STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"


@dataclass_json
@dataclass
class Release:
    abandoned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abandoned' }})
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    build_artifacts: Optional[List[buildartifact.BuildArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildArtifacts' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    delivery_pipeline_snapshot: Optional[deliverypipeline.DeliveryPipeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryPipelineSnapshot' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    render_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderEndTime' }})
    render_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderStartTime' }})
    render_state: Optional[ReleaseRenderStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderState' }})
    skaffold_config_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skaffoldConfigPath' }})
    skaffold_config_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skaffoldConfigUri' }})
    skaffold_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skaffoldVersion' }})
    target_artifacts: Optional[dict[str, targetartifact.TargetArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArtifacts' }})
    target_renders: Optional[dict[str, targetrender.TargetRender]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetRenders' }})
    target_snapshots: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSnapshots' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
