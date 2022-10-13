from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class YoutubeAndPartnersInventorySourceConfig:
    include_youtube_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeYoutubeSearch' }})
    include_youtube_video_partners: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeYoutubeVideoPartners' }})
    include_youtube_videos: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeYoutubeVideos' }})
    
