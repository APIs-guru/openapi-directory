from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AdvertiserEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclass
class AdvertiserInput:
    r"""AdvertiserInput
    A single advertiser in Display & Video 360 (DV360).
    """
    
    ad_server_config: Optional[AdvertiserAdServerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adServerConfig') }})
    billing_config: Optional[AdvertiserBillingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingConfig') }})
    creative_config: Optional[AdvertiserCreativeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeConfig') }})
    data_access_config: Optional[AdvertiserDataAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataAccessConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[AdvertiserEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    general_config: Optional[AdvertiserGeneralConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalConfig') }})
    integration_details: Optional[IntegrationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationDetails') }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    prisma_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaEnabled') }})
    serving_config: Optional[AdvertiserTargetingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingConfig') }})
    

@dataclass_json
@dataclass
class Advertiser:
    r"""Advertiser
    A single advertiser in Display & Video 360 (DV360).
    """
    
    ad_server_config: Optional[AdvertiserAdServerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adServerConfig') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    billing_config: Optional[AdvertiserBillingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingConfig') }})
    creative_config: Optional[AdvertiserCreativeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeConfig') }})
    data_access_config: Optional[AdvertiserDataAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataAccessConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[AdvertiserEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    general_config: Optional[AdvertiserGeneralConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalConfig') }})
    integration_details: Optional[IntegrationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationDetails') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    prisma_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaEnabled') }})
    serving_config: Optional[AdvertiserTargetingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingConfig') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
