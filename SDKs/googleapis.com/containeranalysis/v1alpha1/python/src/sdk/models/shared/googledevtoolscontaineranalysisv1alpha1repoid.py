from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googledevtoolscontaineranalysisv1alpha1projectrepoid


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1RepoID:
    project_repo_id: Optional[googledevtoolscontaineranalysisv1alpha1projectrepoid.GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectRepoId' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
