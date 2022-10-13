from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import embeddedobjectbordersuggestionstate
from . import imagepropertiessuggestionstate
from . import linkedcontentreferencesuggestionstate
from . import sizesuggestionstate


@dataclass_json
@dataclass
class EmbeddedObjectSuggestionState:
    description_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptionSuggested' }})
    embedded_drawing_properties_suggestion_state: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embeddedDrawingPropertiesSuggestionState' }})
    embedded_object_border_suggestion_state: Optional[embeddedobjectbordersuggestionstate.EmbeddedObjectBorderSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embeddedObjectBorderSuggestionState' }})
    image_properties_suggestion_state: Optional[imagepropertiessuggestionstate.ImagePropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePropertiesSuggestionState' }})
    linked_content_reference_suggestion_state: Optional[linkedcontentreferencesuggestionstate.LinkedContentReferenceSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedContentReferenceSuggestionState' }})
    margin_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginBottomSuggested' }})
    margin_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginLeftSuggested' }})
    margin_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginRightSuggested' }})
    margin_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginTopSuggested' }})
    size_suggestion_state: Optional[sizesuggestionstate.SizeSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeSuggestionState' }})
    title_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleSuggested' }})
    
