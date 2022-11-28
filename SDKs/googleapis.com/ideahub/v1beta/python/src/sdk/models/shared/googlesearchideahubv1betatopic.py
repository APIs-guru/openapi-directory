from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1betaTopic:
    r"""GoogleSearchIdeahubV1betaTopic
    Represents a Topic umbrella for a list of questions that a Creator may want to respond to.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    mid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
