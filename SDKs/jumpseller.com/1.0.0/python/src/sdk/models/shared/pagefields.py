from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PageFieldsImage:
    r"""PageFieldsImage
    Image of the Page
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class PageFieldsStatusEnum(str, Enum):
    PUBLIC = "public"
    DRAFT = "draft"
    HIDDEN = "hidden"


@dataclass_json
@dataclass
class PageFields:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    categories: Optional[List[PageCategory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[PageFieldsImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    legal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legal') }})
    meta_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta_description') }})
    page_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_title') }})
    permalink: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permalink') }})
    status: Optional[PageFieldsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    template: Optional[PageTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
