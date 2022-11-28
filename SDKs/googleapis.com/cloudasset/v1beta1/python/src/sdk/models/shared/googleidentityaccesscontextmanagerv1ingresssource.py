from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1IngressSource:
    r"""GoogleIdentityAccesscontextmanagerV1IngressSource
    The source that IngressPolicy authorizes access from.
    """
    
    access_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevel') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
