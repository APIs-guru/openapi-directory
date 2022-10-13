from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import links
from . import keyswithprivatekey
from . import messages
from . import voice


@dataclass_json
@dataclass
class ApplicationCreated:
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    keys: Optional[keyswithprivatekey.KeysWithPrivateKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    messages: messages.Messages = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    voice: voice.Voice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    
