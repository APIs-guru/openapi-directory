from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nextpage


@dataclass_json
@dataclass
class Paging:
    next: Optional[nextpage.NextPage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    
