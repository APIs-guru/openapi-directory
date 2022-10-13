from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import basicfilter


@dataclass_json
@dataclass
class SetBasicFilterRequest:
    filter: Optional[basicfilter.BasicFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    
