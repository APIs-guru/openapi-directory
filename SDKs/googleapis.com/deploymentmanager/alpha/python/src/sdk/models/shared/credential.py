from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Credential:
    r"""Credential
    The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
    """
    
    basic_auth: Optional[BasicAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuth') }})
    service_account: Optional[ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    use_project_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useProjectDefault') }})
    
