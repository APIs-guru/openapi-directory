from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import paginationmeta
from . import committee


@dataclass_json
@dataclass
class CommitteeList:
    pagination: paginationmeta.PaginationMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: List[committee.Committee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
