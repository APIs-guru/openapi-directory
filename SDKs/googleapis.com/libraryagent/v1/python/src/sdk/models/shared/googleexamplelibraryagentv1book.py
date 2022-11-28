from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleExampleLibraryagentV1Book:
    r"""GoogleExampleLibraryagentV1Book
    A single book in the library.
    """
    
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
