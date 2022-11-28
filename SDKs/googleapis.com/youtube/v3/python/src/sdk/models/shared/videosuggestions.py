from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VideoSuggestionsEditorSuggestionsEnum(str, Enum):
    VIDEO_AUTO_LEVELS = "videoAutoLevels"
    VIDEO_STABILIZE = "videoStabilize"
    VIDEO_CROP = "videoCrop"
    AUDIO_QUIET_AUDIO_SWAP = "audioQuietAudioSwap"

class VideoSuggestionsProcessingErrorsEnum(str, Enum):
    AUDIO_FILE = "audioFile"
    IMAGE_FILE = "imageFile"
    PROJECT_FILE = "projectFile"
    NOT_A_VIDEO_FILE = "notAVideoFile"
    DOC_FILE = "docFile"
    ARCHIVE_FILE = "archiveFile"
    UNSUPPORTED_SPATIAL_AUDIO_LAYOUT = "unsupportedSpatialAudioLayout"

class VideoSuggestionsProcessingHintsEnum(str, Enum):
    NON_STREAMABLE_MOV = "nonStreamableMov"
    SEND_BEST_QUALITY_VIDEO = "sendBestQualityVideo"
    SPHERICAL_VIDEO = "sphericalVideo"
    SPATIAL_AUDIO = "spatialAudio"
    VR_VIDEO = "vrVideo"
    HDR_VIDEO = "hdrVideo"

class VideoSuggestionsProcessingWarningsEnum(str, Enum):
    UNKNOWN_CONTAINER = "unknownContainer"
    UNKNOWN_VIDEO_CODEC = "unknownVideoCodec"
    UNKNOWN_AUDIO_CODEC = "unknownAudioCodec"
    INCONSISTENT_RESOLUTION = "inconsistentResolution"
    HAS_EDITLIST = "hasEditlist"
    PROBLEMATIC_VIDEO_CODEC = "problematicVideoCodec"
    PROBLEMATIC_AUDIO_CODEC = "problematicAudioCodec"
    UNSUPPORTED_VR_STEREO_MODE = "unsupportedVrStereoMode"
    UNSUPPORTED_SPHERICAL_PROJECTION_TYPE = "unsupportedSphericalProjectionType"
    UNSUPPORTED_HDR_PIXEL_FORMAT = "unsupportedHdrPixelFormat"
    UNSUPPORTED_HDR_COLOR_METADATA = "unsupportedHdrColorMetadata"
    PROBLEMATIC_HDR_LOOKUP_TABLE = "problematicHdrLookupTable"


@dataclass_json
@dataclass
class VideoSuggestions:
    r"""VideoSuggestions
    Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
    """
    
    editor_suggestions: Optional[List[VideoSuggestionsEditorSuggestionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorSuggestions') }})
    processing_errors: Optional[List[VideoSuggestionsProcessingErrorsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingErrors') }})
    processing_hints: Optional[List[VideoSuggestionsProcessingHintsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingHints') }})
    processing_warnings: Optional[List[VideoSuggestionsProcessingWarningsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingWarnings') }})
    tag_suggestions: Optional[List[VideoSuggestionsTagSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagSuggestions') }})
    
