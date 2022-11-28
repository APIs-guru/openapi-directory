from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CaptionSnippetAudioTrackTypeEnum(str, Enum):
    UNKNOWN = "unknown"
    PRIMARY = "primary"
    COMMENTARY = "commentary"
    DESCRIPTIVE = "descriptive"

class CaptionSnippetFailureReasonEnum(str, Enum):
    UNKNOWN_FORMAT = "unknownFormat"
    UNSUPPORTED_FORMAT = "unsupportedFormat"
    PROCESSING_FAILED = "processingFailed"

class CaptionSnippetStatusEnum(str, Enum):
    SERVING = "serving"
    SYNCING = "syncing"
    FAILED = "failed"

class CaptionSnippetTrackKindEnum(str, Enum):
    STANDARD = "standard"
    ASR = "ASR"
    FORCED = "forced"


@dataclass_json
@dataclass
class CaptionSnippet:
    r"""CaptionSnippet
    Basic details about a caption track, such as its language and name.
    """
    
    audio_track_type: Optional[CaptionSnippetAudioTrackTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioTrackType') }})
    failure_reason: Optional[CaptionSnippetFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    is_auto_synced: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAutoSynced') }})
    is_cc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCC') }})
    is_draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDraft') }})
    is_easy_reader: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEasyReader') }})
    is_large: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLarge') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[CaptionSnippetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    track_kind: Optional[CaptionSnippetTrackKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackKind') }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    
