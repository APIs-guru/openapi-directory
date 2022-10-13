from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obstatement2


@dataclass_json
@dataclass
class ObReadDataStatement2:
    statement: Optional[List[obstatement2.ObStatement2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statement' }})
    
