from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ArticleWithCountTypeMediaMediaMetadata:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class ArticleWithCountTypeMedia:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    media_metadata: Optional[ArticleWithCountTypeMediaMediaMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media-metadata') }})
    subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ArticleWithCountType:
    abstract: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abstract') }})
    byline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byline') }})
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    count_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_type') }})
    des_facet: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('des_facet') }})
    geo_facet: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geo_facet') }})
    media: Optional[List[ArticleWithCountTypeMedia]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    org_facet: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_facet') }})
    per_facet: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_facet') }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_date') }})
    section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
