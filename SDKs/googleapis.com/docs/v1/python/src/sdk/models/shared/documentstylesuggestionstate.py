from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentStyleSuggestionState:
    r"""DocumentStyleSuggestionState
    A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    background_suggestion_state: Optional[BackgroundSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundSuggestionState') }})
    default_footer_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultFooterIdSuggested') }})
    default_header_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultHeaderIdSuggested') }})
    even_page_footer_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evenPageFooterIdSuggested') }})
    even_page_header_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evenPageHeaderIdSuggested') }})
    first_page_footer_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPageFooterIdSuggested') }})
    first_page_header_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPageHeaderIdSuggested') }})
    margin_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginBottomSuggested') }})
    margin_footer_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginFooterSuggested') }})
    margin_header_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginHeaderSuggested') }})
    margin_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginLeftSuggested') }})
    margin_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginRightSuggested') }})
    margin_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginTopSuggested') }})
    page_number_start_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumberStartSuggested') }})
    page_size_suggestion_state: Optional[SizeSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSizeSuggestionState') }})
    use_custom_header_footer_margins_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCustomHeaderFooterMarginsSuggested') }})
    use_even_page_header_footer_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useEvenPageHeaderFooterSuggested') }})
    use_first_page_header_footer_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useFirstPageHeaderFooterSuggested') }})
    
