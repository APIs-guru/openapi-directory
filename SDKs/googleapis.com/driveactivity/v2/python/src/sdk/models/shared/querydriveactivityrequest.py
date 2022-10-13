from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import consolidationstrategy


@dataclass_json
@dataclass
class QueryDriveActivityRequest:
    ancestor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ancestorName' }})
    consolidation_strategy: Optional[consolidationstrategy.ConsolidationStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consolidationStrategy' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    item_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemName' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    
