from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RedirectionSettings:
    r"""RedirectionSettings
    The configuration for redirection per service
    """
    
    code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    to: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
