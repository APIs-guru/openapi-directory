from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthTokenRequest:
    api_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_key' }})
    api_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_secret' }})
    
