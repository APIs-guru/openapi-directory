from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreativeAssetMetadataDetectedFeaturesEnum(str, Enum):
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

class CreativeAssetMetadataWarnedValidationRulesEnum(str, Enum):
    CLICK_TAG_NON_TOP_LEVEL = "CLICK_TAG_NON_TOP_LEVEL"
    CLICK_TAG_MISSING = "CLICK_TAG_MISSING"
    CLICK_TAG_MORE_THAN_ONE = "CLICK_TAG_MORE_THAN_ONE"
    CLICK_TAG_INVALID = "CLICK_TAG_INVALID"
    ORPHANED_ASSET = "ORPHANED_ASSET"
    PRIMARY_HTML_MISSING = "PRIMARY_HTML_MISSING"
    EXTERNAL_FILE_REFERENCED = "EXTERNAL_FILE_REFERENCED"
    MRAID_REFERENCED = "MRAID_REFERENCED"
    ADMOB_REFERENCED = "ADMOB_REFERENCED"
    FILE_TYPE_INVALID = "FILE_TYPE_INVALID"
    ZIP_INVALID = "ZIP_INVALID"
    LINKED_FILE_NOT_FOUND = "LINKED_FILE_NOT_FOUND"
    MAX_FLASH_VERSION_11 = "MAX_FLASH_VERSION_11"
    NOT_SSL_COMPLIANT = "NOT_SSL_COMPLIANT"
    FILE_DETAIL_EMPTY = "FILE_DETAIL_EMPTY"
    ASSET_INVALID = "ASSET_INVALID"
    GWD_PROPERTIES_INVALID = "GWD_PROPERTIES_INVALID"
    ENABLER_UNSUPPORTED_METHOD_DCM = "ENABLER_UNSUPPORTED_METHOD_DCM"
    ASSET_FORMAT_UNSUPPORTED_DCM = "ASSET_FORMAT_UNSUPPORTED_DCM"
    COMPONENT_UNSUPPORTED_DCM = "COMPONENT_UNSUPPORTED_DCM"
    HTML5_FEATURE_UNSUPPORTED = "HTML5_FEATURE_UNSUPPORTED"
    CLICK_TAG_IN_GWD = "CLICK_TAG_IN_GWD"
    CLICK_TAG_HARD_CODED = "CLICK_TAG_HARD_CODED"
    SVG_INVALID = "SVG_INVALID"
    CLICK_TAG_IN_RICH_MEDIA = "CLICK_TAG_IN_RICH_MEDIA"
    MISSING_ENABLER_REFERENCE = "MISSING_ENABLER_REFERENCE"


@dataclass_json
@dataclass
class CreativeAssetMetadata:
    r"""CreativeAssetMetadata
    CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.
    """
    
    asset_identifier: Optional[CreativeAssetID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetIdentifier') }})
    click_tags: Optional[List[ClickTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTags') }})
    counter_custom_events: Optional[List[CreativeCustomEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counterCustomEvents') }})
    detected_features: Optional[List[CreativeAssetMetadataDetectedFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedFeatures') }})
    exit_custom_events: Optional[List[CreativeCustomEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCustomEvents') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    rich_media: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richMedia') }})
    timer_custom_events: Optional[List[CreativeCustomEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerCustomEvents') }})
    warned_validation_rules: Optional[List[CreativeAssetMetadataWarnedValidationRulesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnedValidationRules') }})
    
