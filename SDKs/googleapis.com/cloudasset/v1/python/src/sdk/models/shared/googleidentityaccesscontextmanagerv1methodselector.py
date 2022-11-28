from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1MethodSelector:
    r"""GoogleIdentityAccesscontextmanagerV1MethodSelector
    An allowed method or permission of a service specified in ApiOperation.
    """
    
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
