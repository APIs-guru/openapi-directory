from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigSource:
    r"""ConfigSource
    Represents a source file which is used to generate the service configuration defined by `google.api.Service`.
    """
    
    files: Optional[List[ConfigFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
