from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compositetype


@dataclass_json
@dataclass
class CompositeTypesListResponse:
    composite_types: Optional[List[compositetype.CompositeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compositeTypes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
