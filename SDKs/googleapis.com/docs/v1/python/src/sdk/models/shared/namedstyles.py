from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namedstyle


@dataclass_json
@dataclass
class NamedStyles:
    styles: Optional[List[namedstyle.NamedStyle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'styles' }})
    
