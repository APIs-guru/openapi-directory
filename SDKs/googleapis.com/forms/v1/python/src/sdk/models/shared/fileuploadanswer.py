from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileUploadAnswer:
    r"""FileUploadAnswer
    Info for a single file submitted to a file upload question.
    """
    
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileId') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
