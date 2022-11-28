from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


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
class PaginationLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class PaginationLinks:
    r"""PaginationLinks
    Container containing self, next and last page links.
    """
    
    last: Optional[PaginationLinksLast] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[PaginationLinksNext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    self: Optional[PaginationLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
