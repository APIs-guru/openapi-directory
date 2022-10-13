from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reposource
from . import storagesource


@dataclass_json
@dataclass
class SourceProvenance:
    resolved_repo_source: Optional[reposource.RepoSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedRepoSource' }})
    resolved_storage_source: Optional[storagesource.StorageSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedStorageSource' }})
    
