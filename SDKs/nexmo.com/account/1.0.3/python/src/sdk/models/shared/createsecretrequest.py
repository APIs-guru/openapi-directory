from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateSecretRequest:
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
