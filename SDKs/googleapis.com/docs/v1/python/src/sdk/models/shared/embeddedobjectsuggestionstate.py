from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EmbeddedObjectSuggestionState:
    r"""EmbeddedObjectSuggestionState
    A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    description_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptionSuggested') }})
    embedded_drawing_properties_suggestion_state: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddedDrawingPropertiesSuggestionState') }})
    embedded_object_border_suggestion_state: Optional[EmbeddedObjectBorderSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddedObjectBorderSuggestionState') }})
    image_properties_suggestion_state: Optional[ImagePropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePropertiesSuggestionState') }})
    linked_content_reference_suggestion_state: Optional[LinkedContentReferenceSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedContentReferenceSuggestionState') }})
    margin_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginBottomSuggested') }})
    margin_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginLeftSuggested') }})
    margin_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginRightSuggested') }})
    margin_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginTopSuggested') }})
    size_suggestion_state: Optional[SizeSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeSuggestionState') }})
    title_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleSuggested') }})
    
