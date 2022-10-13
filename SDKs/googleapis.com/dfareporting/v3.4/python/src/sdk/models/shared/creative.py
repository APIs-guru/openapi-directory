from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import size
from . import creativeclickthroughurl
from . import targetwindow
from . import clicktag
from . import creativecustomevent
from . import creativeassetselection
from . import creativeasset
from . import creativefieldassignment
from . import creativecustomevent
from . import fscommand
from . import dimensionvalue
from . import lastmodifiedinfo
from . import obaicon
from . import videooffset
from . import dimensionvalue
from . import size
from . import videooffset
from . import thirdpartytrackingurl
from . import creativecustomevent
from . import universaladid

class CreativeArtworkTypeEnum(str, Enum):
    ARTWORK_TYPE_FLASH = "ARTWORK_TYPE_FLASH"
    ARTWORK_TYPE_HTML5 = "ARTWORK_TYPE_HTML5"
    ARTWORK_TYPE_MIXED = "ARTWORK_TYPE_MIXED"
    ARTWORK_TYPE_IMAGE = "ARTWORK_TYPE_IMAGE"

class CreativeAuthoringSourceEnum(str, Enum):
    CREATIVE_AUTHORING_SOURCE_DCM = "CREATIVE_AUTHORING_SOURCE_DCM"
    CREATIVE_AUTHORING_SOURCE_DBM = "CREATIVE_AUTHORING_SOURCE_DBM"
    CREATIVE_AUTHORING_SOURCE_STUDIO = "CREATIVE_AUTHORING_SOURCE_STUDIO"
    CREATIVE_AUTHORING_SOURCE_GWD = "CREATIVE_AUTHORING_SOURCE_GWD"

class CreativeAuthoringToolEnum(str, Enum):
    NINJA = "NINJA"
    SWIFFY = "SWIFFY"

class CreativeBackupImageFeaturesEnum(str, Enum):
    CSS_FONT_FACE = "CSS_FONT_FACE"
    CSS_BACKGROUND_SIZE = "CSS_BACKGROUND_SIZE"
    CSS_BORDER_IMAGE = "CSS_BORDER_IMAGE"
    CSS_BORDER_RADIUS = "CSS_BORDER_RADIUS"
    CSS_BOX_SHADOW = "CSS_BOX_SHADOW"
    CSS_FLEX_BOX = "CSS_FLEX_BOX"
    CSS_HSLA = "CSS_HSLA"
    CSS_MULTIPLE_BGS = "CSS_MULTIPLE_BGS"
    CSS_OPACITY = "CSS_OPACITY"
    CSS_RGBA = "CSS_RGBA"
    CSS_TEXT_SHADOW = "CSS_TEXT_SHADOW"
    CSS_ANIMATIONS = "CSS_ANIMATIONS"
    CSS_COLUMNS = "CSS_COLUMNS"
    CSS_GENERATED_CONTENT = "CSS_GENERATED_CONTENT"
    CSS_GRADIENTS = "CSS_GRADIENTS"
    CSS_REFLECTIONS = "CSS_REFLECTIONS"
    CSS_TRANSFORMS = "CSS_TRANSFORMS"
    CSS_TRANSFORMS3_D = "CSS_TRANSFORMS3D"
    CSS_TRANSITIONS = "CSS_TRANSITIONS"
    APPLICATION_CACHE = "APPLICATION_CACHE"
    CANVAS = "CANVAS"
    CANVAS_TEXT = "CANVAS_TEXT"
    DRAG_AND_DROP = "DRAG_AND_DROP"
    HASH_CHANGE = "HASH_CHANGE"
    HISTORY = "HISTORY"
    AUDIO = "AUDIO"
    VIDEO = "VIDEO"
    INDEXED_DB = "INDEXED_DB"
    INPUT_ATTR_AUTOCOMPLETE = "INPUT_ATTR_AUTOCOMPLETE"
    INPUT_ATTR_AUTOFOCUS = "INPUT_ATTR_AUTOFOCUS"
    INPUT_ATTR_LIST = "INPUT_ATTR_LIST"
    INPUT_ATTR_PLACEHOLDER = "INPUT_ATTR_PLACEHOLDER"
    INPUT_ATTR_MAX = "INPUT_ATTR_MAX"
    INPUT_ATTR_MIN = "INPUT_ATTR_MIN"
    INPUT_ATTR_MULTIPLE = "INPUT_ATTR_MULTIPLE"
    INPUT_ATTR_PATTERN = "INPUT_ATTR_PATTERN"
    INPUT_ATTR_REQUIRED = "INPUT_ATTR_REQUIRED"
    INPUT_ATTR_STEP = "INPUT_ATTR_STEP"
    INPUT_TYPE_SEARCH = "INPUT_TYPE_SEARCH"
    INPUT_TYPE_TEL = "INPUT_TYPE_TEL"
    INPUT_TYPE_URL = "INPUT_TYPE_URL"
    INPUT_TYPE_EMAIL = "INPUT_TYPE_EMAIL"
    INPUT_TYPE_DATETIME = "INPUT_TYPE_DATETIME"
    INPUT_TYPE_DATE = "INPUT_TYPE_DATE"
    INPUT_TYPE_MONTH = "INPUT_TYPE_MONTH"
    INPUT_TYPE_WEEK = "INPUT_TYPE_WEEK"
    INPUT_TYPE_TIME = "INPUT_TYPE_TIME"
    INPUT_TYPE_DATETIME_LOCAL = "INPUT_TYPE_DATETIME_LOCAL"
    INPUT_TYPE_NUMBER = "INPUT_TYPE_NUMBER"
    INPUT_TYPE_RANGE = "INPUT_TYPE_RANGE"
    INPUT_TYPE_COLOR = "INPUT_TYPE_COLOR"
    LOCAL_STORAGE = "LOCAL_STORAGE"
    POST_MESSAGE = "POST_MESSAGE"
    SESSION_STORAGE = "SESSION_STORAGE"
    WEB_SOCKETS = "WEB_SOCKETS"
    WEB_SQL_DATABASE = "WEB_SQL_DATABASE"
    WEB_WORKERS = "WEB_WORKERS"
    GEO_LOCATION = "GEO_LOCATION"
    INLINE_SVG = "INLINE_SVG"
    SMIL = "SMIL"
    SVG_HREF = "SVG_HREF"
    SVG_CLIP_PATHS = "SVG_CLIP_PATHS"
    TOUCH = "TOUCH"
    WEBGL = "WEBGL"
    SVG_FILTERS = "SVG_FILTERS"
    SVG_FE_IMAGE = "SVG_FE_IMAGE"

class CreativeCompatibilityEnum(str, Enum):
    DISPLAY = "DISPLAY"
    DISPLAY_INTERSTITIAL = "DISPLAY_INTERSTITIAL"
    APP = "APP"
    APP_INTERSTITIAL = "APP_INTERSTITIAL"
    IN_STREAM_VIDEO = "IN_STREAM_VIDEO"
    IN_STREAM_AUDIO = "IN_STREAM_AUDIO"

class CreativeTypeEnum(str, Enum):
    IMAGE = "IMAGE"
    DISPLAY_REDIRECT = "DISPLAY_REDIRECT"
    CUSTOM_DISPLAY = "CUSTOM_DISPLAY"
    INTERNAL_REDIRECT = "INTERNAL_REDIRECT"
    CUSTOM_DISPLAY_INTERSTITIAL = "CUSTOM_DISPLAY_INTERSTITIAL"
    INTERSTITIAL_INTERNAL_REDIRECT = "INTERSTITIAL_INTERNAL_REDIRECT"
    TRACKING_TEXT = "TRACKING_TEXT"
    RICH_MEDIA_DISPLAY_BANNER = "RICH_MEDIA_DISPLAY_BANNER"
    RICH_MEDIA_INPAGE_FLOATING = "RICH_MEDIA_INPAGE_FLOATING"
    RICH_MEDIA_IM_EXPAND = "RICH_MEDIA_IM_EXPAND"
    RICH_MEDIA_DISPLAY_EXPANDING = "RICH_MEDIA_DISPLAY_EXPANDING"
    RICH_MEDIA_DISPLAY_INTERSTITIAL = "RICH_MEDIA_DISPLAY_INTERSTITIAL"
    RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL"
    RICH_MEDIA_MOBILE_IN_APP = "RICH_MEDIA_MOBILE_IN_APP"
    FLASH_INPAGE = "FLASH_INPAGE"
    INSTREAM_VIDEO = "INSTREAM_VIDEO"
    VPAID_LINEAR_VIDEO = "VPAID_LINEAR_VIDEO"
    VPAID_NON_LINEAR_VIDEO = "VPAID_NON_LINEAR_VIDEO"
    INSTREAM_VIDEO_REDIRECT = "INSTREAM_VIDEO_REDIRECT"
    RICH_MEDIA_PEEL_DOWN = "RICH_MEDIA_PEEL_DOWN"
    HTML5_BANNER = "HTML5_BANNER"
    DISPLAY = "DISPLAY"
    DISPLAY_IMAGE_GALLERY = "DISPLAY_IMAGE_GALLERY"
    BRAND_SAFE_DEFAULT_INSTREAM_VIDEO = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO"
    INSTREAM_AUDIO = "INSTREAM_AUDIO"


@dataclass_json
@dataclass
class Creative:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    ad_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adParameters' }})
    ad_tag_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adTagKeys' }})
    additional_sizes: Optional[List[size.Size]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalSizes' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    allow_script_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowScriptAccess' }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    artwork_type: Optional[CreativeArtworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artworkType' }})
    authoring_source: Optional[CreativeAuthoringSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authoringSource' }})
    authoring_tool: Optional[CreativeAuthoringToolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authoringTool' }})
    auto_advance_images: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoAdvanceImages' }})
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    backup_image_click_through_url: Optional[creativeclickthroughurl.CreativeClickThroughURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupImageClickThroughUrl' }})
    backup_image_features: Optional[List[CreativeBackupImageFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupImageFeatures' }})
    backup_image_reporting_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupImageReportingLabel' }})
    backup_image_target_window: Optional[targetwindow.TargetWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupImageTargetWindow' }})
    click_tags: Optional[List[clicktag.ClickTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickTags' }})
    commercial_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commercialId' }})
    companion_creatives: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companionCreatives' }})
    compatibility: Optional[List[CreativeCompatibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility' }})
    convert_flash_to_html5: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertFlashToHtml5' }})
    counter_custom_events: Optional[List[creativecustomevent.CreativeCustomEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counterCustomEvents' }})
    creative_asset_selection: Optional[creativeassetselection.CreativeAssetSelection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeAssetSelection' }})
    creative_assets: Optional[List[creativeasset.CreativeAsset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeAssets' }})
    creative_field_assignments: Optional[List[creativefieldassignment.CreativeFieldAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeFieldAssignments' }})
    custom_key_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customKeyValues' }})
    dynamic_asset_selection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicAssetSelection' }})
    exit_custom_events: Optional[List[creativecustomevent.CreativeCustomEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitCustomEvents' }})
    fs_command: Optional[fscommand.FsCommand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fsCommand' }})
    html_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlCode' }})
    html_code_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlCodeLocked' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_modified_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedInfo' }})
    latest_trafficked_creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestTraffickedCreativeId' }})
    media_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaDescription' }})
    media_duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaDuration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    oba_icon: Optional[obaicon.ObaIcon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obaIcon' }})
    override_css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideCss' }})
    progress_offset: Optional[videooffset.VideoOffset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progressOffset' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUrl' }})
    rendering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderingId' }})
    rendering_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderingIdDimensionValue' }})
    required_flash_plugin_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredFlashPluginVersion' }})
    required_flash_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredFlashVersion' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    skip_offset: Optional[videooffset.VideoOffset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipOffset' }})
    skippable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippable' }})
    ssl_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCompliant' }})
    ssl_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslOverride' }})
    studio_advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioAdvertiserId' }})
    studio_creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioCreativeId' }})
    studio_trafficked_creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioTraffickedCreativeId' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    third_party_backup_image_impressions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdPartyBackupImageImpressionsUrl' }})
    third_party_rich_media_impressions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdPartyRichMediaImpressionsUrl' }})
    third_party_urls: Optional[List[thirdpartytrackingurl.ThirdPartyTrackingURL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdPartyUrls' }})
    timer_custom_events: Optional[List[creativecustomevent.CreativeCustomEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timerCustomEvents' }})
    total_file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFileSize' }})
    type: Optional[CreativeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    universal_ad_id: Optional[universaladid.UniversalAdID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'universalAdId' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
