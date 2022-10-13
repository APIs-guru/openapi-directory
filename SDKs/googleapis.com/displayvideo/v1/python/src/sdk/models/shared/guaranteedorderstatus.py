from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GuaranteedOrderStatusConfigStatusEnum(str, Enum):
    GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED = "GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    COMPLETED = "COMPLETED"

class GuaranteedOrderStatusEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclass
class GuaranteedOrderStatus:
    config_status: Optional[GuaranteedOrderStatusConfigStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configStatus' }})
    entity_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityPauseReason' }})
    entity_status: Optional[GuaranteedOrderStatusEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityStatus' }})
    
