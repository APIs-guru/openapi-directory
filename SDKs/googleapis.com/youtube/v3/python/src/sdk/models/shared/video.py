from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Video:
    r"""Video
    A *video* resource represents a YouTube video.
    """
    
    age_gating: Optional[VideoAgeGating] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageGating') }})
    content_details: Optional[VideoContentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    file_details: Optional[VideoFileDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDetails') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    live_streaming_details: Optional[VideoLiveStreamingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveStreamingDetails') }})
    localizations: Optional[dict[str, VideoLocalization]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizations') }})
    monetization_details: Optional[VideoMonetizationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monetizationDetails') }})
    player: Optional[VideoPlayer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    processing_details: Optional[VideoProcessingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingDetails') }})
    project_details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectDetails') }})
    recording_details: Optional[VideoRecordingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingDetails') }})
    snippet: Optional[VideoSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    statistics: Optional[VideoStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    status: Optional[VideoStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    suggestions: Optional[VideoSuggestions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    topic_details: Optional[VideoTopicDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicDetails') }})
    
