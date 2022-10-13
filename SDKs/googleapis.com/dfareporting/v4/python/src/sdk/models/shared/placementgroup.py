from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import dimensionvalue
from . import lastmodifiedinfo
from . import dimensionvalue
from . import dimensionvalue
from . import lastmodifiedinfo
from . import pricingschedule
from . import dimensionvalue
from . import dimensionvalue

class PlacementGroupActiveStatusEnum(str, Enum):
    PLACEMENT_STATUS_UNKNOWN = "PLACEMENT_STATUS_UNKNOWN"
    PLACEMENT_STATUS_ACTIVE = "PLACEMENT_STATUS_ACTIVE"
    PLACEMENT_STATUS_INACTIVE = "PLACEMENT_STATUS_INACTIVE"
    PLACEMENT_STATUS_ARCHIVED = "PLACEMENT_STATUS_ARCHIVED"
    PLACEMENT_STATUS_PERMANENTLY_ARCHIVED = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"

class PlacementGroupPlacementGroupTypeEnum(str, Enum):
    PLACEMENT_PACKAGE = "PLACEMENT_PACKAGE"
    PLACEMENT_ROADBLOCK = "PLACEMENT_ROADBLOCK"


@dataclass_json
@dataclass
class PlacementGroup:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    active_status: Optional[PlacementGroupActiveStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeStatus' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIdDimensionValue' }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignId' }})
    campaign_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignIdDimensionValue' }})
    child_placement_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPlacementIds' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    content_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentCategoryId' }})
    create_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createInfo' }})
    directory_site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directorySiteId' }})
    directory_site_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directorySiteIdDimensionValue' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_modified_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    placement_group_type: Optional[PlacementGroupPlacementGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementGroupType' }})
    placement_strategy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementStrategyId' }})
    pricing_schedule: Optional[pricingschedule.PricingSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingSchedule' }})
    primary_placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPlacementId' }})
    primary_placement_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPlacementIdDimensionValue' }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteId' }})
    site_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteIdDimensionValue' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    
