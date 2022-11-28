from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileIoDetails:
    r"""FileIoDetails
    Metadata for a File connector used by the job.
    """
    
    file_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePattern') }})
    
