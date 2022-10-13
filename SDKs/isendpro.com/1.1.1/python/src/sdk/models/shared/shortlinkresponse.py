from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShortlinkResponseEtatEtat:
    code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    shortlink: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortlink' }})
    

@dataclass_json
@dataclass
class ShortlinkResponseEtat:
    etat: Optional[List[ShortlinkResponseEtatEtat]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etat' }})
    

@dataclass_json
@dataclass
class ShortlinkResponse:
    etat: Optional[ShortlinkResponseEtat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etat' }})
    
