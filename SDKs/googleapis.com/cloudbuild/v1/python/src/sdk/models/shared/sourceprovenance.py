from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filehashes
from . import reposource
from . import storagesource
from . import storagesourcemanifest


@dataclass_json
@dataclass
class SourceProvenance:
    file_hashes: Optional[dict[str, filehashes.FileHashes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileHashes' }})
    resolved_repo_source: Optional[reposource.RepoSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedRepoSource' }})
    resolved_storage_source: Optional[storagesource.StorageSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedStorageSource' }})
    resolved_storage_source_manifest: Optional[storagesourcemanifest.StorageSourceManifest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedStorageSourceManifest' }})
    
