from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeysMetadataRepresentation:
    active: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    keys: Optional[List[KeysMetadataRepresentationKeyMetadataRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    
