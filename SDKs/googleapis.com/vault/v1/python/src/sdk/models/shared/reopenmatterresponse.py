from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import matter


@dataclass_json
@dataclass
class ReopenMatterResponse:
    matter: Optional[matter.Matter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matter' }})
    
