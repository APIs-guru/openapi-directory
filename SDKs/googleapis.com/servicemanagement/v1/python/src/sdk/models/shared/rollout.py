from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import trafficpercentstrategy

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
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    delete_service_strategy: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteServiceStrategy' }})
    rollout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutId' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    status: Optional[RolloutStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    traffic_percent_strategy: Optional[trafficpercentstrategy.TrafficPercentStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficPercentStrategy' }})
    
