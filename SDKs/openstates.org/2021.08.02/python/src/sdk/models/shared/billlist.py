from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import paginationmeta
from . import bill


@dataclass_json
@dataclass
class BillList:
    pagination: paginationmeta.PaginationMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: List[bill.Bill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
