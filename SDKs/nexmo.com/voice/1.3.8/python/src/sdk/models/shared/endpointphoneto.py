from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EndpointPhoneTo:
    r"""EndpointPhoneTo
    Connect to a Phone (PSTN) number
    """
    
    number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    dtmf_answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dtmfAnswer') }})
    
