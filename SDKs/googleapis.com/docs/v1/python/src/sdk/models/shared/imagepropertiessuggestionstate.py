from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import croppropertiessuggestionstate


@dataclass_json
@dataclass
class ImagePropertiesSuggestionState:
    angle_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'angleSuggested' }})
    brightness_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brightnessSuggested' }})
    content_uri_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUriSuggested' }})
    contrast_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contrastSuggested' }})
    crop_properties_suggestion_state: Optional[croppropertiessuggestionstate.CropPropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropPropertiesSuggestionState' }})
    source_uri_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUriSuggested' }})
    transparency_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transparencySuggested' }})
    
