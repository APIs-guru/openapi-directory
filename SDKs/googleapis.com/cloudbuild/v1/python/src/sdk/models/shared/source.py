from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reposource
from . import storagesource
from . import storagesourcemanifest


@dataclass_json
@dataclass
class Source:
    repo_source: Optional[reposource.RepoSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoSource' }})
    storage_source: Optional[storagesource.StorageSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageSource' }})
    storage_source_manifest: Optional[storagesourcemanifest.StorageSourceManifest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageSourceManifest' }})
    
