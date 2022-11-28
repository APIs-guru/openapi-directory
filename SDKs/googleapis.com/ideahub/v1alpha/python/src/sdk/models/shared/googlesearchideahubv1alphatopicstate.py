from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1alphaTopicState:
    r"""GoogleSearchIdeahubV1alphaTopicState
    Represents topic state specific to a web property.
    """
    
    dismissed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    saved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saved') }})
    
