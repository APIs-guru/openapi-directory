from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class X509Extension:
    r"""X509Extension
    An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
    """
    
    critical: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('critical') }})
    object_id: Optional[ObjectID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
