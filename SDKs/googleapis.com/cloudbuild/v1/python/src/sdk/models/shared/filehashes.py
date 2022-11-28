from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileHashes:
    r"""FileHashes
    Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.
    """
    
    file_hash: Optional[List[Hash]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileHash') }})
    
