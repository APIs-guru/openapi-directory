from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googledevtoolscontaineranalysisv1alpha1cloudreposourcecontext
from . import googledevtoolscontaineranalysisv1alpha1gerritsourcecontext
from . import googledevtoolscontaineranalysisv1alpha1gitsourcecontext


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1SourceContext:
    cloud_repo: Optional[googledevtoolscontaineranalysisv1alpha1cloudreposourcecontext.GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudRepo' }})
    gerrit: Optional[googledevtoolscontaineranalysisv1alpha1gerritsourcecontext.GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gerrit' }})
    git: Optional[googledevtoolscontaineranalysisv1alpha1gitsourcecontext.GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    
