from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceProvenance:
    r"""SourceProvenance
    Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
    """
    
    resolved_repo_source: Optional[RepoSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedRepoSource') }})
    resolved_storage_source: Optional[StorageSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedStorageSource') }})
    
