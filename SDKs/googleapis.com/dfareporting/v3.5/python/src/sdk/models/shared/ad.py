from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Ad
    Contains properties of a Campaign Manager ad.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    audience_segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceSegmentId') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    campaign_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignIdDimensionValue') }})
    click_through_url: Optional[ClickThroughURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    click_through_url_suffix_properties: Optional[ClickThroughURLSuffixProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrlSuffixProperties') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    compatibility: Optional[AdCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility') }})
    create_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createInfo') }})
    creative_group_assignments: Optional[List[CreativeGroupAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroupAssignments') }})
    creative_rotation: Optional[CreativeRotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeRotation') }})
    day_part_targeting: Optional[DayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayPartTargeting') }})
    default_click_through_event_tag_properties: Optional[DefaultClickThroughEventTagProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultClickThroughEventTagProperties') }})
    delivery_schedule: Optional[DeliverySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliverySchedule') }})
    dynamic_click_tracker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicClickTracker') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_tag_overrides: Optional[List[EventTagOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTagOverrides') }})
    geo_targeting: Optional[GeoTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    key_value_targeting_expression: Optional[KeyValueTargetingExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValueTargetingExpression') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    language_targeting: Optional[LanguageTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageTargeting') }})
    last_modified_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    placement_assignments: Optional[List[PlacementAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementAssignments') }})
    remarketing_list_expression: Optional[ListTargetingExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remarketingListExpression') }})
    size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    ssl_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCompliant') }})
    ssl_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslRequired') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    targeting_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingTemplateId') }})
    technology_targeting: Optional[TechnologyTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technologyTargeting') }})
    type: Optional[AdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
