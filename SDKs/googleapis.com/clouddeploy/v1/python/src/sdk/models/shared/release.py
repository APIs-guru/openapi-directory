from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReleaseRenderStateEnum(str, Enum):
    RENDER_STATE_UNSPECIFIED = "RENDER_STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"


@dataclass_json
@dataclass
class Release:
    r"""Release
    A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
    """
    
    abandoned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abandoned') }})
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    build_artifacts: Optional[List[BuildArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildArtifacts') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delivery_pipeline_snapshot: Optional[DeliveryPipeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryPipelineSnapshot') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    render_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderEndTime') }})
    render_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderStartTime') }})
    render_state: Optional[ReleaseRenderStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderState') }})
    skaffold_config_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skaffoldConfigPath') }})
    skaffold_config_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skaffoldConfigUri') }})
    skaffold_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skaffoldVersion') }})
    target_artifacts: Optional[dict[str, TargetArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArtifacts') }})
    target_renders: Optional[dict[str, TargetRender]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetRenders') }})
    target_snapshots: Optional[List[Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSnapshots') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class ReleaseInput:
    r"""ReleaseInput
    A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    build_artifacts: Optional[List[BuildArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildArtifacts') }})
    delivery_pipeline_snapshot: Optional[DeliveryPipelineInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryPipelineSnapshot') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    skaffold_config_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skaffoldConfigPath') }})
    skaffold_config_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skaffoldConfigUri') }})
    skaffold_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skaffoldVersion') }})
    
