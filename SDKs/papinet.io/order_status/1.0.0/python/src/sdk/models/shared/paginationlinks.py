from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaginationLinksFirst:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

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
class PaginationLinksPrev:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class PaginationLinks:
    first: Optional[PaginationLinksFirst] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    last: Optional[PaginationLinksLast] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: PaginationLinksNext = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    prev: Optional[PaginationLinksPrev] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    
