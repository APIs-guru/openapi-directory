from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaginationLinksFirst:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class PaginationLinksLast:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class PaginationLinksNext:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class PaginationLinksPrev:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class PaginationLinks:
    next: PaginationLinksNext = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    first: Optional[PaginationLinksFirst] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: Optional[PaginationLinksLast] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    prev: Optional[PaginationLinksPrev] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    
