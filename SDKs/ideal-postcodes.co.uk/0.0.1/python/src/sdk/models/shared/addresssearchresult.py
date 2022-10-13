from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class AddressSearchResult:
    hits: Optional[List[address.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hits' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
