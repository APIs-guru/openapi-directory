from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import size
from . import creativeassetid
from . import creativecustomevent
from . import size
from . import size
from . import dimensionvalue
from . import offsetposition
from . import offsetposition
from . import size

class CreativeAssetAlignmentEnum(str, Enum):
    ALIGNMENT_TOP = "ALIGNMENT_TOP"
    ALIGNMENT_RIGHT = "ALIGNMENT_RIGHT"
    ALIGNMENT_BOTTOM = "ALIGNMENT_BOTTOM"
    ALIGNMENT_LEFT = "ALIGNMENT_LEFT"

class CreativeAssetArtworkTypeEnum(str, Enum):
    ARTWORK_TYPE_FLASH = "ARTWORK_TYPE_FLASH"
    ARTWORK_TYPE_HTML5 = "ARTWORK_TYPE_HTML5"
    ARTWORK_TYPE_MIXED = "ARTWORK_TYPE_MIXED"
    ARTWORK_TYPE_IMAGE = "ARTWORK_TYPE_IMAGE"

class CreativeAssetChildAssetTypeEnum(str, Enum):
    CHILD_ASSET_TYPE_FLASH = "CHILD_ASSET_TYPE_FLASH"
    CHILD_ASSET_TYPE_VIDEO = "CHILD_ASSET_TYPE_VIDEO"
    CHILD_ASSET_TYPE_IMAGE = "CHILD_ASSET_TYPE_IMAGE"
    CHILD_ASSET_TYPE_DATA = "CHILD_ASSET_TYPE_DATA"

class CreativeAssetDetectedFeaturesEnum(str, Enum):
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

class CreativeAssetDisplayTypeEnum(str, Enum):
    ASSET_DISPLAY_TYPE_INPAGE = "ASSET_DISPLAY_TYPE_INPAGE"
    ASSET_DISPLAY_TYPE_FLOATING = "ASSET_DISPLAY_TYPE_FLOATING"
    ASSET_DISPLAY_TYPE_OVERLAY = "ASSET_DISPLAY_TYPE_OVERLAY"
    ASSET_DISPLAY_TYPE_EXPANDING = "ASSET_DISPLAY_TYPE_EXPANDING"
    ASSET_DISPLAY_TYPE_FLASH_IN_FLASH = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH"
    ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING"
    ASSET_DISPLAY_TYPE_PEEL_DOWN = "ASSET_DISPLAY_TYPE_PEEL_DOWN"
    ASSET_DISPLAY_TYPE_VPAID_LINEAR = "ASSET_DISPLAY_TYPE_VPAID_LINEAR"
    ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR = "ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR"
    ASSET_DISPLAY_TYPE_BACKDROP = "ASSET_DISPLAY_TYPE_BACKDROP"

class CreativeAssetDurationTypeEnum(str, Enum):
    ASSET_DURATION_TYPE_AUTO = "ASSET_DURATION_TYPE_AUTO"
    ASSET_DURATION_TYPE_NONE = "ASSET_DURATION_TYPE_NONE"
    ASSET_DURATION_TYPE_CUSTOM = "ASSET_DURATION_TYPE_CUSTOM"

class CreativeAssetOrientationEnum(str, Enum):
    LANDSCAPE = "LANDSCAPE"
    PORTRAIT = "PORTRAIT"
    SQUARE = "SQUARE"

class CreativeAssetPositionLeftUnitEnum(str, Enum):
    OFFSET_UNIT_PIXEL = "OFFSET_UNIT_PIXEL"
    OFFSET_UNIT_PERCENT = "OFFSET_UNIT_PERCENT"
    OFFSET_UNIT_PIXEL_FROM_CENTER = "OFFSET_UNIT_PIXEL_FROM_CENTER"

class CreativeAssetPositionTopUnitEnum(str, Enum):
    OFFSET_UNIT_PIXEL = "OFFSET_UNIT_PIXEL"
    OFFSET_UNIT_PERCENT = "OFFSET_UNIT_PERCENT"
    OFFSET_UNIT_PIXEL_FROM_CENTER = "OFFSET_UNIT_PIXEL_FROM_CENTER"

class CreativeAssetRoleEnum(str, Enum):
    PRIMARY = "PRIMARY"
    BACKUP_IMAGE = "BACKUP_IMAGE"
    ADDITIONAL_IMAGE = "ADDITIONAL_IMAGE"
    ADDITIONAL_FLASH = "ADDITIONAL_FLASH"
    PARENT_VIDEO = "PARENT_VIDEO"
    TRANSCODED_VIDEO = "TRANSCODED_VIDEO"
    OTHER = "OTHER"
    ALTERNATE_VIDEO = "ALTERNATE_VIDEO"
    PARENT_AUDIO = "PARENT_AUDIO"
    TRANSCODED_AUDIO = "TRANSCODED_AUDIO"

class CreativeAssetStartTimeTypeEnum(str, Enum):
    ASSET_START_TIME_TYPE_NONE = "ASSET_START_TIME_TYPE_NONE"
    ASSET_START_TIME_TYPE_CUSTOM = "ASSET_START_TIME_TYPE_CUSTOM"

class CreativeAssetWindowModeEnum(str, Enum):
    OPAQUE = "OPAQUE"
    WINDOW = "WINDOW"
    TRANSPARENT = "TRANSPARENT"


@dataclass_json
@dataclass
class CreativeAsset:
    action_script3: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionScript3' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    additional_sizes: Optional[List[size.Size]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalSizes' }})
    alignment: Optional[CreativeAssetAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alignment' }})
    artwork_type: Optional[CreativeAssetArtworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artworkType' }})
    asset_identifier: Optional[creativeassetid.CreativeAssetID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetIdentifier' }})
    audio_bit_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioBitRate' }})
    audio_sample_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioSampleRate' }})
    backup_image_exit: Optional[creativecustomevent.CreativeCustomEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupImageExit' }})
    bit_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitRate' }})
    child_asset_type: Optional[CreativeAssetChildAssetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childAssetType' }})
    collapsed_size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collapsedSize' }})
    companion_creative_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companionCreativeIds' }})
    custom_start_time_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customStartTimeValue' }})
    detected_features: Optional[List[CreativeAssetDetectedFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedFeatures' }})
    display_type: Optional[CreativeAssetDisplayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayType' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    duration_type: Optional[CreativeAssetDurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationType' }})
    expanded_dimension: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expandedDimension' }})
    file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSize' }})
    flash_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flashVersion' }})
    frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameRate' }})
    hide_flash_objects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideFlashObjects' }})
    hide_selection_boxes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideSelectionBoxes' }})
    horizontally_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontallyLocked' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    media_duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaDuration' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    offset: Optional[offsetposition.OffsetPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    orientation: Optional[CreativeAssetOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    original_backup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalBackup' }})
    polite_load: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'politeLoad' }})
    position: Optional[offsetposition.OffsetPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    position_left_unit: Optional[CreativeAssetPositionLeftUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionLeftUnit' }})
    position_top_unit: Optional[CreativeAssetPositionTopUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionTopUnit' }})
    progressive_serving_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progressiveServingUrl' }})
    pushdown: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushdown' }})
    pushdown_duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushdownDuration' }})
    role: Optional[CreativeAssetRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    ssl_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCompliant' }})
    start_time_type: Optional[CreativeAssetStartTimeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeType' }})
    streaming_serving_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingServingUrl' }})
    transparency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transparency' }})
    vertically_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verticallyLocked' }})
    window_mode: Optional[CreativeAssetWindowModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowMode' }})
    z_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zIndex' }})
    zip_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipFilename' }})
    zip_filesize: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipFilesize' }})
    
