from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreativeCreativeAttributesEnum(str, Enum):
    CREATIVE_ATTRIBUTE_UNSPECIFIED = "CREATIVE_ATTRIBUTE_UNSPECIFIED"
    CREATIVE_ATTRIBUTE_VAST = "CREATIVE_ATTRIBUTE_VAST"
    CREATIVE_ATTRIBUTE_VPAID_LINEAR = "CREATIVE_ATTRIBUTE_VPAID_LINEAR"
    CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR = "CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR"

class CreativeCreativeTypeEnum(str, Enum):
    CREATIVE_TYPE_UNSPECIFIED = "CREATIVE_TYPE_UNSPECIFIED"
    CREATIVE_TYPE_STANDARD = "CREATIVE_TYPE_STANDARD"
    CREATIVE_TYPE_EXPANDABLE = "CREATIVE_TYPE_EXPANDABLE"
    CREATIVE_TYPE_VIDEO = "CREATIVE_TYPE_VIDEO"
    CREATIVE_TYPE_NATIVE = "CREATIVE_TYPE_NATIVE"
    CREATIVE_TYPE_TEMPLATED_APP_INSTALL = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL"
    CREATIVE_TYPE_NATIVE_SITE_SQUARE = "CREATIVE_TYPE_NATIVE_SITE_SQUARE"
    CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL"
    CREATIVE_TYPE_LIGHTBOX = "CREATIVE_TYPE_LIGHTBOX"
    CREATIVE_TYPE_NATIVE_APP_INSTALL = "CREATIVE_TYPE_NATIVE_APP_INSTALL"
    CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE"
    CREATIVE_TYPE_AUDIO = "CREATIVE_TYPE_AUDIO"
    CREATIVE_TYPE_PUBLISHER_HOSTED = "CREATIVE_TYPE_PUBLISHER_HOSTED"
    CREATIVE_TYPE_NATIVE_VIDEO = "CREATIVE_TYPE_NATIVE_VIDEO"
    CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"

class CreativeEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"

class CreativeExpandingDirectionEnum(str, Enum):
    EXPANDING_DIRECTION_UNSPECIFIED = "EXPANDING_DIRECTION_UNSPECIFIED"
    EXPANDING_DIRECTION_NONE = "EXPANDING_DIRECTION_NONE"
    EXPANDING_DIRECTION_UP = "EXPANDING_DIRECTION_UP"
    EXPANDING_DIRECTION_DOWN = "EXPANDING_DIRECTION_DOWN"
    EXPANDING_DIRECTION_LEFT = "EXPANDING_DIRECTION_LEFT"
    EXPANDING_DIRECTION_RIGHT = "EXPANDING_DIRECTION_RIGHT"
    EXPANDING_DIRECTION_UP_AND_LEFT = "EXPANDING_DIRECTION_UP_AND_LEFT"
    EXPANDING_DIRECTION_UP_AND_RIGHT = "EXPANDING_DIRECTION_UP_AND_RIGHT"
    EXPANDING_DIRECTION_DOWN_AND_LEFT = "EXPANDING_DIRECTION_DOWN_AND_LEFT"
    EXPANDING_DIRECTION_DOWN_AND_RIGHT = "EXPANDING_DIRECTION_DOWN_AND_RIGHT"
    EXPANDING_DIRECTION_UP_OR_DOWN = "EXPANDING_DIRECTION_UP_OR_DOWN"
    EXPANDING_DIRECTION_LEFT_OR_RIGHT = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
    EXPANDING_DIRECTION_ANY_DIAGONAL = "EXPANDING_DIRECTION_ANY_DIAGONAL"

class CreativeHostingSourceEnum(str, Enum):
    HOSTING_SOURCE_UNSPECIFIED = "HOSTING_SOURCE_UNSPECIFIED"
    HOSTING_SOURCE_CM = "HOSTING_SOURCE_CM"
    HOSTING_SOURCE_THIRD_PARTY = "HOSTING_SOURCE_THIRD_PARTY"
    HOSTING_SOURCE_HOSTED = "HOSTING_SOURCE_HOSTED"
    HOSTING_SOURCE_RICH_MEDIA = "HOSTING_SOURCE_RICH_MEDIA"


@dataclass_json
@dataclass
class Creative:
    r"""Creative
    A single Creative.
    """
    
    additional_dimensions: Optional[List[Dimensions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDimensions') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    appended_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appendedTag') }})
    assets: Optional[List[AssetAssociation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    cm_placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmPlacementId') }})
    cm_tracking_ad: Optional[CmTrackingAd] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmTrackingAd') }})
    companion_creative_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionCreativeIds') }})
    counter_events: Optional[List[CounterEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counterEvents') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creative_attributes: Optional[List[CreativeCreativeAttributesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeAttributes') }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    creative_type: Optional[CreativeCreativeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeType') }})
    dimensions: Optional[Dimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dynamic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamic') }})
    entity_status: Optional[CreativeEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    exit_events: Optional[List[ExitEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitEvents') }})
    expand_on_hover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandOnHover') }})
    expanding_direction: Optional[CreativeExpandingDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandingDirection') }})
    hosting_source: Optional[CreativeHostingSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostingSource') }})
    html5_video: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html5Video') }})
    ias_campaign_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iasCampaignMonitoring') }})
    integration_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationCode') }})
    js_tracker_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsTrackerUrl') }})
    line_item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemIds') }})
    media_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaDuration') }})
    mp3_audio: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mp3Audio') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    oba_icon: Optional[ObaIcon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaIcon') }})
    ogg_audio: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oggAudio') }})
    progress_offset: Optional[AudioVideoOffset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressOffset') }})
    require_html5: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireHtml5') }})
    require_mraid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireMraid') }})
    require_ping_for_attribution: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirePingForAttribution') }})
    review_status: Optional[ReviewStatusInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewStatus') }})
    skip_offset: Optional[AudioVideoOffset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipOffset') }})
    skippable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippable') }})
    third_party_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyTag') }})
    third_party_urls: Optional[List[ThirdPartyURL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyUrls') }})
    timer_events: Optional[List[TimerEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerEvents') }})
    tracker_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackerUrls') }})
    transcodes: Optional[List[Transcode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcodes') }})
    universal_ad_id: Optional[UniversalAdID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalAdId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vast_tag_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vastTagUrl') }})
    vpaid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpaid') }})
    

@dataclass_json
@dataclass
class CreativeInput:
    r"""CreativeInput
    A single Creative.
    """
    
    additional_dimensions: Optional[List[Dimensions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDimensions') }})
    appended_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appendedTag') }})
    assets: Optional[List[AssetAssociation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    cm_tracking_ad: Optional[CmTrackingAd] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmTrackingAd') }})
    companion_creative_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionCreativeIds') }})
    counter_events: Optional[List[CounterEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counterEvents') }})
    creative_type: Optional[CreativeCreativeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeType') }})
    dimensions: Optional[Dimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[CreativeEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    exit_events: Optional[List[ExitEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitEvents') }})
    expand_on_hover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandOnHover') }})
    expanding_direction: Optional[CreativeExpandingDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandingDirection') }})
    hosting_source: Optional[CreativeHostingSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostingSource') }})
    ias_campaign_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iasCampaignMonitoring') }})
    integration_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationCode') }})
    js_tracker_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsTrackerUrl') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    oba_icon: Optional[ObaIcon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaIcon') }})
    progress_offset: Optional[AudioVideoOffset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressOffset') }})
    require_html5: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireHtml5') }})
    require_mraid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireMraid') }})
    require_ping_for_attribution: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirePingForAttribution') }})
    review_status: Optional[ReviewStatusInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewStatus') }})
    skip_offset: Optional[AudioVideoOffset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipOffset') }})
    skippable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippable') }})
    third_party_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyTag') }})
    third_party_urls: Optional[List[ThirdPartyURL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyUrls') }})
    timer_events: Optional[List[TimerEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerEvents') }})
    tracker_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackerUrls') }})
    universal_ad_id: Optional[UniversalAdID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalAdId') }})
    vast_tag_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vastTagUrl') }})
    
