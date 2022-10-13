from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import paginationmeta
from . import person


@dataclass_json
@dataclass
class PersonList:
    pagination: paginationmeta.PaginationMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: List[person.Person] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
