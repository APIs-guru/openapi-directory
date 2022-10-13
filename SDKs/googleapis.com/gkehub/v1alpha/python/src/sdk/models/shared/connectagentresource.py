from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import typemeta


@dataclass_json
@dataclass
class ConnectAgentResource:
    manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifest' }})
    type: Optional[typemeta.TypeMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
