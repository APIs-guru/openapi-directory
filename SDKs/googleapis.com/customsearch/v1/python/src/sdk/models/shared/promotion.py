from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PromotionBodyLines:
    html_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlTitle' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PromotionImage:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class Promotion:
    body_lines: Optional[List[PromotionBodyLines]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyLines' }})
    display_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayLink' }})
    html_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlTitle' }})
    image: Optional[PromotionImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
