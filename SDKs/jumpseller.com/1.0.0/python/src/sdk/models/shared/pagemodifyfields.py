from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import pagecategory


@dataclass_json
@dataclass
class PageModifyFieldsImage:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class PageModifyFieldsStatusEnum(str, Enum):
    PUBLIC = "public"
    DRAFT = "draft"
    HIDDEN = "hidden"


@dataclass_json
@dataclass
class PageModifyFields:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    categories: Optional[List[pagecategory.PageCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    image: Optional[PageModifyFieldsImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    meta_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_description' }})
    page_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_title' }})
    permalink: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permalink' }})
    status: Optional[PageModifyFieldsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    template: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
