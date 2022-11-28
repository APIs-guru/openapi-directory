from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfigUserPassword:
    r"""GoogleCloudConnectorsV1AuthConfigUserPassword
    Parameters to support Username and Password Authentication.
    """
    
    password: Optional[GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
