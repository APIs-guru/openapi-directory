from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CleverSettings:
    consumer_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerKey' }})
    consumer_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerSecret' }})
    orga_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgaId' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
