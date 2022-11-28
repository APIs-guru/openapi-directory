from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataProfileResultProfileField:
    r"""GoogleCloudDataplexV1DataProfileResultProfileField
    Represents a column field within a table schema.
    """
    
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile: Optional[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
