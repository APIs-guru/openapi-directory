from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetSyncResponse:
    block_chain_height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockChainHeight' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sync_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncPercentage' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
