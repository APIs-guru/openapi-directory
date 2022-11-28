from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PromotionBodyLines:
    r"""PromotionBodyLines
    Block object belonging to a promotion.
    """
    
    html_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlTitle') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PromotionImage:
    r"""PromotionImage
    Image belonging to a promotion.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class Promotion:
    r"""Promotion
    Promotion result.
    """
    
    body_lines: Optional[List[PromotionBodyLines]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyLines') }})
    display_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayLink') }})
    html_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlTitle') }})
    image: Optional[PromotionImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
