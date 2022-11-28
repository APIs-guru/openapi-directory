from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BasicAuthentication:
    r"""BasicAuthentication
    The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks.
    """
    
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
