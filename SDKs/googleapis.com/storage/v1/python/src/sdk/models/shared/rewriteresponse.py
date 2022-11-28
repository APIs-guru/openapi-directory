from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RewriteResponse:
    r"""RewriteResponse
    A rewrite response.
    """
    
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('done') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    object_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectSize') }})
    resource: Optional[Object] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    rewrite_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewriteToken') }})
    total_bytes_rewritten: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalBytesRewritten') }})
    
