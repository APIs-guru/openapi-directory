from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import dimensionvalue

class AdvertiserStatusEnum(str, Enum):
    APPROVED = "APPROVED"
    ON_HOLD = "ON_HOLD"


@dataclass_json
@dataclass
class Advertiser:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserGroupId' }})
    click_through_url_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThroughUrlSuffix' }})
    default_click_through_event_tag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultClickThroughEventTagId' }})
    default_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultEmail' }})
    floodlight_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightConfigurationId' }})
    floodlight_configuration_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightConfigurationIdDimensionValue' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    original_floodlight_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalFloodlightConfigurationId' }})
    status: Optional[AdvertiserStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspended' }})
    
