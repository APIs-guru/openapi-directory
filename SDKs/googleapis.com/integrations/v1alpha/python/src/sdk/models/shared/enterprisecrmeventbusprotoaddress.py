from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoAddress:
    r"""EnterpriseCrmEventbusProtoAddress
    Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tokens: Optional[List[EnterpriseCrmEventbusProtoToken]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    
