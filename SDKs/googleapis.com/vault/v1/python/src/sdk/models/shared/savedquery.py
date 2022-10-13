from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import query


@dataclass_json
@dataclass
class SavedQuery:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    matter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matterId' }})
    query: Optional[query.Query] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    saved_query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savedQueryId' }})
    
