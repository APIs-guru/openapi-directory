from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecretMgmtLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class SecretMgmtLinks:
    self: Optional[SecretMgmtLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
