from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googledevtoolscontaineranalysisv1alpha1aliascontext
from . import googledevtoolscontaineranalysisv1alpha1repoid


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext:
    alias_context: Optional[googledevtoolscontaineranalysisv1alpha1aliascontext.GoogleDevtoolsContaineranalysisV1alpha1AliasContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliasContext' }})
    repo_id: Optional[googledevtoolscontaineranalysisv1alpha1repoid.GoogleDevtoolsContaineranalysisV1alpha1RepoID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoId' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
