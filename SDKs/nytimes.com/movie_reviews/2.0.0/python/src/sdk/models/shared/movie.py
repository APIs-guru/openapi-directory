from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MovieLink:
    suggested_link_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggested_link_text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class MovieMultimediaResource:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class MovieMultimedia:
    resource: Optional[MovieMultimediaResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    

@dataclass_json
@dataclass
class Movie:
    byline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byline' }})
    critics_pick: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'critics_pick' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    display_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_title' }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headline' }})
    link: Optional[MovieLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    mpaa_rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpaa_rating' }})
    multimedia: Optional[MovieMultimedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multimedia' }})
    opening_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opening_date' }})
    publication_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publication_date' }})
    summary_short: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary_short' }})
    
