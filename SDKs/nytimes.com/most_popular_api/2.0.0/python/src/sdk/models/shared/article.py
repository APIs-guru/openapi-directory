from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Article:
    abstract: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abstract' }})
    byline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byline' }})
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    des_facet: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'des_facet' }})
    geo_facet: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geo_facet' }})
    media: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    org_facet: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org_facet' }})
    per_facet: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_facet' }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_date' }})
    section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
