from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExtendSchemaRequest:
    r"""ExtendSchemaRequest
    ExtendSchemaRequest is the request message for ExtendSchema method.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileContents') }})
    gcs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsPath') }})
    
