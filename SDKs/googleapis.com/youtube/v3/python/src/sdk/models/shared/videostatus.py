from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VideoStatusFailureReasonEnum(str, Enum):
    CONVERSION = "conversion"
    INVALID_FILE = "invalidFile"
    EMPTY_FILE = "emptyFile"
    TOO_SMALL = "tooSmall"
    CODEC = "codec"
    UPLOAD_ABORTED = "uploadAborted"

class VideoStatusLicenseEnum(str, Enum):
    YOUTUBE = "youtube"
    CREATIVE_COMMON = "creativeCommon"

class VideoStatusPrivacyStatusEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"

class VideoStatusRejectionReasonEnum(str, Enum):
    COPYRIGHT = "copyright"
    INAPPROPRIATE = "inappropriate"
    DUPLICATE = "duplicate"
    TERMS_OF_USE = "termsOfUse"
    UPLOADER_ACCOUNT_SUSPENDED = "uploaderAccountSuspended"
    LENGTH = "length"
    CLAIM = "claim"
    UPLOADER_ACCOUNT_CLOSED = "uploaderAccountClosed"
    TRADEMARK = "trademark"
    LEGAL = "legal"

class VideoStatusUploadStatusEnum(str, Enum):
    UPLOADED = "uploaded"
    PROCESSED = "processed"
    FAILED = "failed"
    REJECTED = "rejected"
    DELETED = "deleted"


@dataclass_json
@dataclass
class VideoStatus:
    embeddable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embeddable' }})
    failure_reason: Optional[VideoStatusFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    license: Optional[VideoStatusLicenseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    made_for_kids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'madeForKids' }})
    privacy_status: Optional[VideoStatusPrivacyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacyStatus' }})
    public_stats_viewable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicStatsViewable' }})
    publish_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rejection_reason: Optional[VideoStatusRejectionReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectionReason' }})
    self_declared_made_for_kids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfDeclaredMadeForKids' }})
    upload_status: Optional[VideoStatusUploadStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadStatus' }})
    
