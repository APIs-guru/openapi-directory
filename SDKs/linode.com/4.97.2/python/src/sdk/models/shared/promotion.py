from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PromotionServiceTypeEnum(str, Enum):
    ALL = "all"
    BACKUP = "backup"
    BLOCKSTORAGE = "blockstorage"
    DB_MYSQL = "db_mysql"
    IP_V4 = "ip_v4"
    LINODE = "linode"
    LINODE_DISK = "linode_disk"
    LINODE_MEMORY = "linode_memory"
    LONGVIEW = "longview"
    MANAGED = "managed"
    NODEBALANCER = "nodebalancer"
    OBJECTSTORAGE = "objectstorage"
    TRANSFER_TX = "transfer_tx"


@dataclass_json
@dataclass
class Promotion:
    credit_monthly_cap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credit_monthly_cap' }})
    credit_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credit_remaining' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expire_dt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_dt' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    service_type: Optional[PromotionServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_type' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    this_month_credit_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'this_month_credit_remaining' }})
    
