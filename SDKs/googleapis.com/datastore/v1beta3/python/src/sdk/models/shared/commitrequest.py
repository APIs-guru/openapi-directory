from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mutation

class CommitRequestModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    TRANSACTIONAL = "TRANSACTIONAL"
    NON_TRANSACTIONAL = "NON_TRANSACTIONAL"


@dataclass_json
@dataclass
class CommitRequest:
    mode: Optional[CommitRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    mutations: Optional[List[mutation.Mutation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutations' }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
