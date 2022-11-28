from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiffUploadRequest:
    r"""DiffUploadRequest
    # gdata.* are outside protos with mising documentation
    """
    
    checksums_info: Optional[CompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksumsInfo') }})
    object_info: Optional[CompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectInfo') }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectVersion') }})
    
