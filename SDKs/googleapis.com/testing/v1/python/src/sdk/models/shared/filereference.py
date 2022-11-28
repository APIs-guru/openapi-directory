from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileReference:
    r"""FileReference
    A reference to a file, used for user inputs.
    """
    
    gcs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsPath') }})
    
