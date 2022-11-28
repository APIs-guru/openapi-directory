from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Auth:
    r"""Auth
    This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.
    """
    
    access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevels') }})
    audiences: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audiences') }})
    claims: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    presenter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presenter') }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    
