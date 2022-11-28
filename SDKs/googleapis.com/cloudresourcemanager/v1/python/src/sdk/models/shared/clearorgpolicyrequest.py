from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClearOrgPolicyRequest:
    r"""ClearOrgPolicyRequest
    The request sent to the ClearOrgPolicy method.
    """
    
    constraint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraint') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    
