from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudStorageSink:
    r"""CloudStorageSink
    Export sink for Cloud Storage files.
    """
    
    files: Optional[List[CloudStorageFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    
