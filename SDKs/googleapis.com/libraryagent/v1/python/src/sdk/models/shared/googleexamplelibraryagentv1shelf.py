from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleExampleLibraryagentV1Shelf:
    r"""GoogleExampleLibraryagentV1Shelf
    A Shelf contains a collection of books with a theme.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    
