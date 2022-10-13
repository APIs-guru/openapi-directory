from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backgroundsuggestionstate
from . import sizesuggestionstate


@dataclass_json
@dataclass
class DocumentStyleSuggestionState:
    background_suggestion_state: Optional[backgroundsuggestionstate.BackgroundSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundSuggestionState' }})
    default_footer_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultFooterIdSuggested' }})
    default_header_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultHeaderIdSuggested' }})
    even_page_footer_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evenPageFooterIdSuggested' }})
    even_page_header_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evenPageHeaderIdSuggested' }})
    first_page_footer_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPageFooterIdSuggested' }})
    first_page_header_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPageHeaderIdSuggested' }})
    margin_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginBottomSuggested' }})
    margin_footer_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginFooterSuggested' }})
    margin_header_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginHeaderSuggested' }})
    margin_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginLeftSuggested' }})
    margin_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginRightSuggested' }})
    margin_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginTopSuggested' }})
    page_number_start_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumberStartSuggested' }})
    page_size_suggestion_state: Optional[sizesuggestionstate.SizeSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSizeSuggestionState' }})
    use_custom_header_footer_margins_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useCustomHeaderFooterMarginsSuggested' }})
    use_even_page_header_footer_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useEvenPageHeaderFooterSuggested' }})
    use_first_page_header_footer_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useFirstPageHeaderFooterSuggested' }})
    
