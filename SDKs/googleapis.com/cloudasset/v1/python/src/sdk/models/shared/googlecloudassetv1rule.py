from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssetV1Rule:
    r"""GoogleCloudAssetV1Rule
    Represents a rule defined in an organization policy
    """
    
    allow_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAll') }})
    condition: Optional[Expr] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    deny_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denyAll') }})
    enforce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce') }})
    values: Optional[GoogleCloudAssetV1StringValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
