from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import advertiseradserverconfig
from . import advertisercreativeconfig
from . import advertiserdataaccessconfig
from . import advertisergeneralconfig
from . import integrationdetails
from . import advertisertargetingconfig

class AdvertiserEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclass
class Advertiser:
    ad_server_config: Optional[advertiseradserverconfig.AdvertiserAdServerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adServerConfig' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    creative_config: Optional[advertisercreativeconfig.AdvertiserCreativeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeConfig' }})
    data_access_config: Optional[advertiserdataaccessconfig.AdvertiserDataAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataAccessConfig' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_status: Optional[AdvertiserEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityStatus' }})
    general_config: Optional[advertisergeneralconfig.AdvertiserGeneralConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generalConfig' }})
    integration_details: Optional[integrationdetails.IntegrationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerId' }})
    prisma_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prismaEnabled' }})
    serving_config: Optional[advertisertargetingconfig.AdvertiserTargetingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingConfig' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
