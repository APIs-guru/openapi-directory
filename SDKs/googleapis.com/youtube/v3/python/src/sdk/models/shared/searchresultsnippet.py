from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SearchResultSnippetLiveBroadcastContentEnum(str, Enum):
    NONE = "none"
    UPCOMING = "upcoming"
    LIVE = "live"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class SearchResultSnippet:
    r"""SearchResultSnippet
    Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
    """
    
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    channel_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTitle') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    live_broadcast_content: Optional[SearchResultSnippetLiveBroadcastContentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveBroadcastContent') }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    thumbnails: Optional[ThumbnailDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
