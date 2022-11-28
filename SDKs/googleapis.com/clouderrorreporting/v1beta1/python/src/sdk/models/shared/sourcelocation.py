from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceLocation:
    r"""SourceLocation
    Indicates a location in the source code of the service for which errors are reported. `functionName` must be provided by the application when reporting an error, unless the error report contains a `message` with a supported exception stack trace. All fields are optional for the later case.
    """
    
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineNumber') }})
    
