from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import application


@dataclass_json
@dataclass
class Embedded:
    applications: Optional[List[application.Application]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    
