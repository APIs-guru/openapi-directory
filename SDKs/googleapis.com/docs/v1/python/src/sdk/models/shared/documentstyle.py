from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentStyle:
    r"""DocumentStyle
    The style of the document.
    """
    
    background: Optional[Background] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    default_footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultFooterId') }})
    default_header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultHeaderId') }})
    even_page_footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evenPageFooterId') }})
    even_page_header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evenPageHeaderId') }})
    first_page_footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPageFooterId') }})
    first_page_header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPageHeaderId') }})
    margin_bottom: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginBottom') }})
    margin_footer: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginFooter') }})
    margin_header: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginHeader') }})
    margin_left: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginLeft') }})
    margin_right: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginRight') }})
    margin_top: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginTop') }})
    page_number_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumberStart') }})
    page_size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    use_custom_header_footer_margins: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCustomHeaderFooterMargins') }})
    use_even_page_header_footer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useEvenPageHeaderFooter') }})
    use_first_page_header_footer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useFirstPageHeaderFooter') }})
    
