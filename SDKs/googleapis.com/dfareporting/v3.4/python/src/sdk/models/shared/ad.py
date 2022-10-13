from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import dimensionvalue
from . import clickthroughurl
from . import clickthroughurlsuffixproperties
from . import lastmodifiedinfo
from . import creativegroupassignment
from . import creativerotation
from . import dayparttargeting
from . import defaultclickthrougheventtagproperties
from . import deliveryschedule
from . import eventtagoverride
from . import geotargeting
from . import dimensionvalue
from . import keyvaluetargetingexpression
from . import languagetargeting
from . import lastmodifiedinfo
from . import placementassignment
from . import listtargetingexpression
from . import size
from . import technologytargeting

class AdCompatibilityEnum(str, Enum):
    DISPLAY = "DISPLAY"
    DISPLAY_INTERSTITIAL = "DISPLAY_INTERSTITIAL"
    APP = "APP"
    APP_INTERSTITIAL = "APP_INTERSTITIAL"
    IN_STREAM_VIDEO = "IN_STREAM_VIDEO"
    IN_STREAM_AUDIO = "IN_STREAM_AUDIO"

class AdTypeEnum(str, Enum):
    AD_SERVING_STANDARD_AD = "AD_SERVING_STANDARD_AD"
    AD_SERVING_DEFAULT_AD = "AD_SERVING_DEFAULT_AD"
    AD_SERVING_CLICK_TRACKER = "AD_SERVING_CLICK_TRACKER"
    AD_SERVING_TRACKING = "AD_SERVING_TRACKING"
    AD_SERVING_BRAND_SAFE_AD = "AD_SERVING_BRAND_SAFE_AD"


@dataclass_json
@dataclass
class Ad:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIdDimensionValue' }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    audience_segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceSegmentId' }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignId' }})
    campaign_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignIdDimensionValue' }})
    click_through_url: Optional[clickthroughurl.ClickThroughURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThroughUrl' }})
    click_through_url_suffix_properties: Optional[clickthroughurlsuffixproperties.ClickThroughURLSuffixProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThroughUrlSuffixProperties' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    compatibility: Optional[AdCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility' }})
    create_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createInfo' }})
    creative_group_assignments: Optional[List[creativegroupassignment.CreativeGroupAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeGroupAssignments' }})
    creative_rotation: Optional[creativerotation.CreativeRotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeRotation' }})
    day_part_targeting: Optional[dayparttargeting.DayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayPartTargeting' }})
    default_click_through_event_tag_properties: Optional[defaultclickthrougheventtagproperties.DefaultClickThroughEventTagProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultClickThroughEventTagProperties' }})
    delivery_schedule: Optional[deliveryschedule.DeliverySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliverySchedule' }})
    dynamic_click_tracker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicClickTracker' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_tag_overrides: Optional[List[eventtagoverride.EventTagOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTagOverrides' }})
    geo_targeting: Optional[geotargeting.GeoTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoTargeting' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    key_value_targeting_expression: Optional[keyvaluetargetingexpression.KeyValueTargetingExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValueTargetingExpression' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    language_targeting: Optional[languagetargeting.LanguageTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageTargeting' }})
    last_modified_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    placement_assignments: Optional[List[placementassignment.PlacementAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementAssignments' }})
    remarketing_list_expression: Optional[listtargetingexpression.ListTargetingExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remarketingListExpression' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    ssl_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCompliant' }})
    ssl_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslRequired' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    targeting_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingTemplateId' }})
    technology_targeting: Optional[technologytargeting.TechnologyTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'technologyTargeting' }})
    type: Optional[AdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
