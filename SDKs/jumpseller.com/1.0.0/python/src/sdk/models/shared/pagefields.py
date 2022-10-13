from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import pagecategory
from . import pagetemplate


@dataclass_json
@dataclass
class PageFieldsImage:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class PageFieldsStatusEnum(str, Enum):
    PUBLIC = "public"
    DRAFT = "draft"
    HIDDEN = "hidden"


@dataclass_json
@dataclass
class PageFields:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    categories: Optional[List[pagecategory.PageCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[PageFieldsImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    legal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legal' }})
    meta_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_description' }})
    page_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_title' }})
    permalink: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permalink' }})
    status: Optional[PageFieldsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    template: Optional[pagetemplate.PageTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
