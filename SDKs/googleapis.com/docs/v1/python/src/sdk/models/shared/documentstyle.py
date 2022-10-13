from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import background
from . import dimension
from . import dimension
from . import dimension
from . import dimension
from . import dimension
from . import dimension
from . import size


@dataclass_json
@dataclass
class DocumentStyle:
    background: Optional[background.Background] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background' }})
    default_footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultFooterId' }})
    default_header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultHeaderId' }})
    even_page_footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evenPageFooterId' }})
    even_page_header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evenPageHeaderId' }})
    first_page_footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPageFooterId' }})
    first_page_header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPageHeaderId' }})
    margin_bottom: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginBottom' }})
    margin_footer: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginFooter' }})
    margin_header: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginHeader' }})
    margin_left: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginLeft' }})
    margin_right: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginRight' }})
    margin_top: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginTop' }})
    page_number_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumberStart' }})
    page_size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    use_custom_header_footer_margins: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useCustomHeaderFooterMargins' }})
    use_even_page_header_footer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useEvenPageHeaderFooter' }})
    use_first_page_header_footer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useFirstPageHeaderFooter' }})
    
