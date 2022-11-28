from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PodcastExtraField:
    facebook_handle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facebook_handle') }})
    google_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_url') }})
    instagram_handle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instagram_handle') }})
    linkedin_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedin_url') }})
    patreon_handle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patreon_handle') }})
    spotify_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spotify_url') }})
    twitter_handle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitter_handle') }})
    url1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url1') }})
    url2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url2') }})
    url3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url3') }})
    wechat_handle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wechat_handle') }})
    youtube_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtube_url') }})
    
