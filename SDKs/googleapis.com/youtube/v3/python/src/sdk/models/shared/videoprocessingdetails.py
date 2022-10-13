from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import videoprocessingdetailsprocessingprogress

class VideoProcessingDetailsProcessingFailureReasonEnum(str, Enum):
    UPLOAD_FAILED = "uploadFailed"
    TRANSCODE_FAILED = "transcodeFailed"
    STREAMING_FAILED = "streamingFailed"
    OTHER = "other"

class VideoProcessingDetailsProcessingStatusEnum(str, Enum):
    PROCESSING = "processing"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    TERMINATED = "terminated"


@dataclass_json
@dataclass
class VideoProcessingDetails:
    editor_suggestions_availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editorSuggestionsAvailability' }})
    file_details_availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileDetailsAvailability' }})
    processing_failure_reason: Optional[VideoProcessingDetailsProcessingFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingFailureReason' }})
    processing_issues_availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingIssuesAvailability' }})
    processing_progress: Optional[videoprocessingdetailsprocessingprogress.VideoProcessingDetailsProcessingProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingProgress' }})
    processing_status: Optional[VideoProcessingDetailsProcessingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingStatus' }})
    tag_suggestions_availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagSuggestionsAvailability' }})
    thumbnails_availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailsAvailability' }})
    
