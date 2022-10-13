from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1actionparameter

class GoogleAppsCardV1ActionLoadIndicatorEnum(str, Enum):
    SPINNER = "SPINNER"
    NONE = "NONE"


@dataclass_json
@dataclass
class GoogleAppsCardV1Action:
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'function' }})
    load_indicator: Optional[GoogleAppsCardV1ActionLoadIndicatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadIndicator' }})
    parameters: Optional[List[googleappscardv1actionparameter.GoogleAppsCardV1ActionParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    persist_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistValues' }})
    
