from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CuratedListSearchResult:
    r"""CuratedListSearchResult
    When **type** is *curated*.
    """
    
    description_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_highlighted') }})
    description_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_original') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listennotes_url') }})
    podcasts: Optional[List[PodcastMinimum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('podcasts') }})
    pub_date_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pub_date_ms') }})
    source_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_domain') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_url') }})
    title_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_highlighted') }})
    title_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_original') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
