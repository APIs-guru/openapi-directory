from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PartnerEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclass
class Partner:
    r"""Partner
    A single partner in Display & Video 360 (DV360).
    """
    
    ad_server_config: Optional[PartnerAdServerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adServerConfig') }})
    data_access_config: Optional[PartnerDataAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataAccessConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[PartnerEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    exchange_config: Optional[ExchangeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeConfig') }})
    general_config: Optional[PartnerGeneralConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
