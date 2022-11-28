from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulletSuggestionState:
    r"""BulletSuggestionState
    A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    list_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listIdSuggested') }})
    nesting_level_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nestingLevelSuggested') }})
    text_style_suggestion_state: Optional[TextStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyleSuggestionState') }})
    
