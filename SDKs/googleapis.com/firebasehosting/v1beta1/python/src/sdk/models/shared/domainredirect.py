from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DomainRedirectTypeEnum(str, Enum):
    REDIRECT_TYPE_UNSPECIFIED = "REDIRECT_TYPE_UNSPECIFIED"
    MOVED_PERMANENTLY = "MOVED_PERMANENTLY"


@dataclass_json
@dataclass
class DomainRedirect:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    type: Optional[DomainRedirectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
