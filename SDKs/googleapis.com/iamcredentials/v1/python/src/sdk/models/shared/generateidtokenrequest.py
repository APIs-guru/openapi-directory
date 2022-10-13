from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GenerateIDTokenRequest:
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audience' }})
    delegates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegates' }})
    include_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeEmail' }})
    
