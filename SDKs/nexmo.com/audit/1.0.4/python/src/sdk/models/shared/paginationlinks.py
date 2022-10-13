from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaginationLinksLast:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class PaginationLinksNext:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class PaginationLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class PaginationLinks:
    last: Optional[PaginationLinksLast] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[PaginationLinksNext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    self: Optional[PaginationLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
