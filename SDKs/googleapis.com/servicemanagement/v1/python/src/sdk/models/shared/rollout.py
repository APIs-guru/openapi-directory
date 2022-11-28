from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RolloutStatusEnum(str, Enum):
    ROLLOUT_STATUS_UNSPECIFIED = "ROLLOUT_STATUS_UNSPECIFIED"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCESS = "SUCCESS"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"
    PENDING = "PENDING"
    FAILED_ROLLED_BACK = "FAILED_ROLLED_BACK"


@dataclass_json
@dataclass
class Rollout:
    r"""Rollout
    A rollout resource that defines how service configuration versions are pushed to control plane systems. Typically, you create a new version of the service config, and then create a Rollout to push the service config.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    delete_service_strategy: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteServiceStrategy') }})
    rollout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutId') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    status: Optional[RolloutStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    traffic_percent_strategy: Optional[TrafficPercentStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficPercentStrategy') }})
    
