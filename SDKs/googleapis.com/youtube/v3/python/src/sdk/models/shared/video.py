from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import videoagegating
from . import videocontentdetails
from . import videofiledetails
from . import videolivestreamingdetails
from . import videolocalization
from . import videomonetizationdetails
from . import videoplayer
from . import videoprocessingdetails
from . import videorecordingdetails
from . import videosnippet
from . import videostatistics
from . import videostatus
from . import videosuggestions
from . import videotopicdetails


@dataclass_json
@dataclass
class Video:
    age_gating: Optional[videoagegating.VideoAgeGating] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageGating' }})
    content_details: Optional[videocontentdetails.VideoContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    file_details: Optional[videofiledetails.VideoFileDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileDetails' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    live_streaming_details: Optional[videolivestreamingdetails.VideoLiveStreamingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveStreamingDetails' }})
    localizations: Optional[dict[str, videolocalization.VideoLocalization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizations' }})
    monetization_details: Optional[videomonetizationdetails.VideoMonetizationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monetizationDetails' }})
    player: Optional[videoplayer.VideoPlayer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player' }})
    processing_details: Optional[videoprocessingdetails.VideoProcessingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingDetails' }})
    project_details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectDetails' }})
    recording_details: Optional[videorecordingdetails.VideoRecordingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordingDetails' }})
    snippet: Optional[videosnippet.VideoSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    statistics: Optional[videostatistics.VideoStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    status: Optional[videostatus.VideoStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    suggestions: Optional[videosuggestions.VideoSuggestions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    topic_details: Optional[videotopicdetails.VideoTopicDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicDetails' }})
    
