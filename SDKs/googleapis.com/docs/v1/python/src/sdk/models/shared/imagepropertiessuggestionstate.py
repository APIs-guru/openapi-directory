from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImagePropertiesSuggestionState:
    r"""ImagePropertiesSuggestionState
    A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    angle_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('angleSuggested') }})
    brightness_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brightnessSuggested') }})
    content_uri_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUriSuggested') }})
    contrast_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contrastSuggested') }})
    crop_properties_suggestion_state: Optional[CropPropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropPropertiesSuggestionState') }})
    source_uri_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUriSuggested') }})
    transparency_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transparencySuggested') }})
    
