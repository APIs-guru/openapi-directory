from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Source:
    r"""Source
    The location of the function source code.
    """
    
    repo_source: Optional[RepoSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoSource') }})
    storage_source: Optional[StorageSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageSource') }})
    
