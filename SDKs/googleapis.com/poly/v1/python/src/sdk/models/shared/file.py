from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class File:
    r"""File
    Represents a file in Poly, which can be a root, resource, or thumbnail file.
    """
    
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    relative_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativePath') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
