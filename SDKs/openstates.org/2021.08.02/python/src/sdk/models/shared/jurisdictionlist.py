from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import paginationmeta
from . import jurisdiction


@dataclass_json
@dataclass
class JurisdictionList:
    pagination: paginationmeta.PaginationMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: List[jurisdiction.Jurisdiction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
