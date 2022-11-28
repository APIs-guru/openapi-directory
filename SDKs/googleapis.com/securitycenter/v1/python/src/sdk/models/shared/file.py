from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class File:
    r"""File
    File information about the related binary/library used by an executable, or the script used by a script interpreter
    """
    
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    hashed_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashedSize') }})
    partially_hashed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partiallyHashed') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
