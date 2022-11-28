from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UploadedPythonPackage:
    r"""UploadedPythonPackage
    Artifact uploaded using the PythonPackage directive.
    """
    
    file_hashes: Optional[FileHashes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileHashes') }})
    push_timing: Optional[TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushTiming') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
