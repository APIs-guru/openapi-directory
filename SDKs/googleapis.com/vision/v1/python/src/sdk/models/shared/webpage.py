from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webimage
from . import webimage


@dataclass_json
@dataclass
class WebPage:
    full_matching_images: Optional[List[webimage.WebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullMatchingImages' }})
    page_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageTitle' }})
    partial_matching_images: Optional[List[webimage.WebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partialMatchingImages' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
