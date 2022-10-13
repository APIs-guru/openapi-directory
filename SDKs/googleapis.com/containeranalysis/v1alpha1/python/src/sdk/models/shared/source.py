from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googledevtoolscontaineranalysisv1alpha1sourcecontext
from . import storagesource
from . import googledevtoolscontaineranalysisv1alpha1sourcecontext
from . import filehashes
from . import reposource
from . import storagesource


@dataclass_json
@dataclass
class Source:
    additional_contexts: Optional[List[googledevtoolscontaineranalysisv1alpha1sourcecontext.GoogleDevtoolsContaineranalysisV1alpha1SourceContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalContexts' }})
    artifact_storage_source: Optional[storagesource.StorageSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactStorageSource' }})
    context: Optional[googledevtoolscontaineranalysisv1alpha1sourcecontext.GoogleDevtoolsContaineranalysisV1alpha1SourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    file_hashes: Optional[dict[str, filehashes.FileHashes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileHashes' }})
    repo_source: Optional[reposource.RepoSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoSource' }})
    storage_source: Optional[storagesource.StorageSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageSource' }})
    
