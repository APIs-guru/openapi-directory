from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinksConversationsListSelf:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class LinksConversationsList:
    self: LinksConversationsListSelf = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
