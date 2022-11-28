from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OsPolicyResourceFile:
    r"""OsPolicyResourceFile
    A remote or local file.
    """
    
    allow_insecure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowInsecure') }})
    gcs: Optional[OsPolicyResourceFileGcs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcs') }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPath') }})
    remote: Optional[OsPolicyResourceFileRemote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote') }})
    
