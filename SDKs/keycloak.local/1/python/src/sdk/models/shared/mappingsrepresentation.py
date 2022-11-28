from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MappingsRepresentation:
    client_mappings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientMappings') }})
    realm_mappings: Optional[List[RoleRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realmMappings') }})
    
