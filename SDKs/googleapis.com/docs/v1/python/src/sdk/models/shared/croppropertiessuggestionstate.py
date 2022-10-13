from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CropPropertiesSuggestionState:
    angle_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'angleSuggested' }})
    offset_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetBottomSuggested' }})
    offset_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetLeftSuggested' }})
    offset_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetRightSuggested' }})
    offset_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetTopSuggested' }})
    
