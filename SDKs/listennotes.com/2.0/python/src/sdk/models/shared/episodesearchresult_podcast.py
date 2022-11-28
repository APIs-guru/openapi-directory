from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EpisodeSearchResultPodcast:
    r"""EpisodeSearchResultPodcast
    The podcast that this episode belongs to.
    """
    
    genre_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genre_ids') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    listen_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_score') }})
    listen_score_global_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_score_global_rank') }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listennotes_url') }})
    publisher_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher_highlighted') }})
    publisher_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher_original') }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    title_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_highlighted') }})
    title_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_original') }})
    
