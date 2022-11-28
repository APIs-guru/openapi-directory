from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SemanticVersion:
    r"""SemanticVersion
    Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.
    """
    
    major_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorNumber') }})
    minor_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minorNumber') }})
    patch: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch') }})
    
