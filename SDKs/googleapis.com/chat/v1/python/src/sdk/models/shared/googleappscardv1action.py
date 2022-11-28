from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsCardV1ActionInteractionEnum(str, Enum):
    INTERACTION_UNSPECIFIED = "INTERACTION_UNSPECIFIED"
    OPEN_DIALOG = "OPEN_DIALOG"

class GoogleAppsCardV1ActionLoadIndicatorEnum(str, Enum):
    SPINNER = "SPINNER"
    NONE = "NONE"


@dataclass_json
@dataclass
class GoogleAppsCardV1Action:
    r"""GoogleAppsCardV1Action
    An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
    """
    
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('function') }})
    interaction: Optional[GoogleAppsCardV1ActionInteractionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interaction') }})
    load_indicator: Optional[GoogleAppsCardV1ActionLoadIndicatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadIndicator') }})
    parameters: Optional[List[GoogleAppsCardV1ActionParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    persist_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistValues') }})
    
