from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Target:
    r"""Target
    A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    anthos_cluster: Optional[AnthosCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anthosCluster') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    execution_configs: Optional[List[ExecutionConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfigs') }})
    gke: Optional[GkeCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gke') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    require_approval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireApproval') }})
    run: Optional[CloudRunLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class TargetInput:
    r"""TargetInput
    A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    anthos_cluster: Optional[AnthosCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anthosCluster') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    execution_configs: Optional[List[ExecutionConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfigs') }})
    gke: Optional[GkeCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gke') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    require_approval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireApproval') }})
    run: Optional[CloudRunLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    
