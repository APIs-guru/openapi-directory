from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinksConversationSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class LinksConversation:
    self: Optional[LinksConversationSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
