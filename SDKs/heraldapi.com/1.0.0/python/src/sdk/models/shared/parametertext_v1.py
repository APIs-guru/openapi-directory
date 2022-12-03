from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ParameterTextV1:
    r"""ParameterTextV1
    Object containing text for the parameter that you can render on a front-end.
    """
    
    agent_facing_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent_facing_text') }})
    applicant_facing_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicant_facing_text') }})
    
