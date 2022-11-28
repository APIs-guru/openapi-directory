from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReviewAuthor:
    r"""ReviewAuthor
    Author of this review.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    

@dataclass_json
@dataclass
class ReviewSource:
    r"""ReviewSource
    Information regarding the source of this review, when the review is not from a Google Books user.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extra_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraDescription') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class Review:
    author: Optional[ReviewAuthor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    full_text_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullTextUrl') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    source: Optional[ReviewSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeId') }})
    
