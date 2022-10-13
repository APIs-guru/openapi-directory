from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import partneradserverconfig
from . import partnerdataaccessconfig
from . import exchangeconfig
from . import partnergeneralconfig

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
    ad_server_config: Optional[partneradserverconfig.PartnerAdServerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adServerConfig' }})
    data_access_config: Optional[partnerdataaccessconfig.PartnerDataAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataAccessConfig' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_status: Optional[PartnerEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityStatus' }})
    exchange_config: Optional[exchangeconfig.ExchangeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeConfig' }})
    general_config: Optional[partnergeneralconfig.PartnerGeneralConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generalConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
