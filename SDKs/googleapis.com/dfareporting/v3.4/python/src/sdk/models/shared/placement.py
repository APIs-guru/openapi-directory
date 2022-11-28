from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PlacementCompatibilityEnum(str, Enum):
    DISPLAY = "DISPLAY"
    DISPLAY_INTERSTITIAL = "DISPLAY_INTERSTITIAL"
    APP = "APP"
    APP_INTERSTITIAL = "APP_INTERSTITIAL"
    IN_STREAM_VIDEO = "IN_STREAM_VIDEO"
    IN_STREAM_AUDIO = "IN_STREAM_AUDIO"

class PlacementPaymentSourceEnum(str, Enum):
    PLACEMENT_AGENCY_PAID = "PLACEMENT_AGENCY_PAID"
    PLACEMENT_PUBLISHER_PAID = "PLACEMENT_PUBLISHER_PAID"

class PlacementStatusEnum(str, Enum):
    PENDING_REVIEW = "PENDING_REVIEW"
    PAYMENT_ACCEPTED = "PAYMENT_ACCEPTED"
    PAYMENT_REJECTED = "PAYMENT_REJECTED"
    ACKNOWLEDGE_REJECTION = "ACKNOWLEDGE_REJECTION"
    ACKNOWLEDGE_ACCEPTANCE = "ACKNOWLEDGE_ACCEPTANCE"
    DRAFT = "DRAFT"

class PlacementTagFormatsEnum(str, Enum):
    PLACEMENT_TAG_STANDARD = "PLACEMENT_TAG_STANDARD"
    PLACEMENT_TAG_IFRAME_JAVASCRIPT = "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
    PLACEMENT_TAG_IFRAME_ILAYER = "PLACEMENT_TAG_IFRAME_ILAYER"
    PLACEMENT_TAG_INTERNAL_REDIRECT = "PLACEMENT_TAG_INTERNAL_REDIRECT"
    PLACEMENT_TAG_JAVASCRIPT = "PLACEMENT_TAG_JAVASCRIPT"
    PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
    PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
    PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
    PLACEMENT_TAG_CLICK_COMMANDS = "PLACEMENT_TAG_CLICK_COMMANDS"
    PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
    PLACEMENT_TAG_TRACKING = "PLACEMENT_TAG_TRACKING"
    PLACEMENT_TAG_TRACKING_IFRAME = "PLACEMENT_TAG_TRACKING_IFRAME"
    PLACEMENT_TAG_TRACKING_JAVASCRIPT = "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
    PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
    PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
    PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"

class PlacementVpaidAdapterChoiceEnum(str, Enum):
    DEFAULT = "DEFAULT"
    FLASH = "FLASH"
    HTML5 = "HTML5"
    BOTH = "BOTH"


@dataclass_json
@dataclass
class Placement:
    r"""Placement
    Contains properties of a placement.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    ad_blocking_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adBlockingOptOut') }})
    additional_sizes: Optional[List[Size]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalSizes') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    campaign_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignIdDimensionValue') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    compatibility: Optional[PlacementCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility') }})
    content_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentCategoryId') }})
    create_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createInfo') }})
    directory_site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteId') }})
    directory_site_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteIdDimensionValue') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyName') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedInfo') }})
    lookback_configuration: Optional[LookbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookbackConfiguration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payment_approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentApproved') }})
    payment_source: Optional[PlacementPaymentSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentSource') }})
    placement_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementGroupId') }})
    placement_group_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementGroupIdDimensionValue') }})
    placement_strategy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementStrategyId') }})
    pricing_schedule: Optional[PricingSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingSchedule') }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    publisher_update_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherUpdateInfo') }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteId') }})
    site_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteIdDimensionValue') }})
    size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    ssl_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslRequired') }})
    status: Optional[PlacementStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    tag_formats: Optional[List[PlacementTagFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFormats') }})
    tag_setting: Optional[TagSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagSetting') }})
    video_active_view_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoActiveViewOptOut') }})
    video_settings: Optional[VideoSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoSettings') }})
    vpaid_adapter_choice: Optional[PlacementVpaidAdapterChoiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpaidAdapterChoice') }})
    
