from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenerateAccessTokenRequest:
    delegates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegates') }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
