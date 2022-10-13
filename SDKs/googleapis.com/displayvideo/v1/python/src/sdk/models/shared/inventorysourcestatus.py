from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InventorySourceStatusConfigStatusEnum(str, Enum):
    INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED = "INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED"
    INVENTORY_SOURCE_CONFIG_STATUS_PENDING = "INVENTORY_SOURCE_CONFIG_STATUS_PENDING"
    INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED = "INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED"

class InventorySourceStatusEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"

class InventorySourceStatusSellerStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclass
class InventorySourceStatus:
    config_status: Optional[InventorySourceStatusConfigStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configStatus' }})
    entity_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityPauseReason' }})
    entity_status: Optional[InventorySourceStatusEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityStatus' }})
    seller_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerPauseReason' }})
    seller_status: Optional[InventorySourceStatusSellerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerStatus' }})
    
