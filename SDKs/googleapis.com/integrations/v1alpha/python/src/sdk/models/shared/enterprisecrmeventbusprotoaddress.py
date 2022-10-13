from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprototoken


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoAddress:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tokens: Optional[List[enterprisecrmeventbusprototoken.EnterpriseCrmEventbusProtoToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    
