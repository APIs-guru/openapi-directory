from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Promotion
    Promotions generally
    offer a set amount of credit that can be used toward your Linode
    services, and the promotion expires after a specified date. As well,
    a monthly cap on the promotional offer is set.
    
    Simply put, a promotion offers a certain amount of credit every
    month, until either the expiration date is passed, or until the total
    promotional credit is used, whichever comes first.
    
    """
    
    credit_monthly_cap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credit_monthly_cap') }})
    credit_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credit_remaining') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expire_dt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_dt') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    service_type: Optional[PromotionServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_type') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    this_month_credit_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('this_month_credit_remaining') }})
    
