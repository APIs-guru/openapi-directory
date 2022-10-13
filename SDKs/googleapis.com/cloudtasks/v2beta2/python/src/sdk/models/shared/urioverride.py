from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class URIOverrideSchemeEnum(str, Enum):
    SCHEME_UNSPECIFIED = "SCHEME_UNSPECIFIED"
    HTTP = "HTTP"
    HTTPS = "HTTPS"


@dataclass_json
@dataclass
class URIOverride:
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    scheme: Optional[URIOverrideSchemeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    
