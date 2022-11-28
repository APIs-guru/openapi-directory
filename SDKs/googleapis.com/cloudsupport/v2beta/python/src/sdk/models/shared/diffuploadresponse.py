from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiffUploadResponse:
    r"""DiffUploadResponse
    # gdata.* are outside protos with mising documentation
    """
    
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectVersion') }})
    original_object: Optional[CompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalObject') }})
    
