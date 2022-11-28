from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenerateUploadURLResponse:
    r"""GenerateUploadURLResponse
    Response of `GenerateSourceUploadUrl` method.
    """
    
    storage_source: Optional[StorageSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageSource') }})
    upload_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadUrl') }})
    
