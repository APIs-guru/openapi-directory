from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthenticationRule:
    r"""AuthenticationRule
    Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.
    """
    
    allow_without_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowWithoutCredential') }})
    oauth: Optional[OAuthRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth') }})
    requirements: Optional[List[AuthRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirements') }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    
