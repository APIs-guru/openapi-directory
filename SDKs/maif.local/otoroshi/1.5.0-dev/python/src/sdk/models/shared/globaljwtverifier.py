from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from . import hsalgosettings
from . import rsalgosettings
from . import esalgosettings
from . import jwksalgosettings
from . import inqueryparam
from . import inheader
from . import incookie
from . import passthrough
from . import sign
from . import transform


@dataclass_json
@dataclass
class GlobalJwtVerifier:
    algo_settings: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algoSettings' }})
    desc: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    strategy: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strategy' }})
    strict: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strict' }})
    
