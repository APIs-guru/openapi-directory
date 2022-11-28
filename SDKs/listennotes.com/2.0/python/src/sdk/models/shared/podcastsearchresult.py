from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PodcastSearchResult:
    r"""PodcastSearchResult
    When **type** is *podcast*.
    """
    
    description_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_highlighted') }})
    description_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_original') }})
    earliest_pub_date_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliest_pub_date_ms') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    explicit_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicit_content') }})
    genre_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genre_ids') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    itunes_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itunes_id') }})
    latest_pub_date_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_pub_date_ms') }})
    listen_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_score') }})
    listen_score_global_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_score_global_rank') }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listennotes_url') }})
    publisher_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher_highlighted') }})
    publisher_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher_original') }})
    rss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rss') }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    title_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_highlighted') }})
    title_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_original') }})
    total_episodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_episodes') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
