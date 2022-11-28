from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1RepoID:
    r"""GoogleDevtoolsContaineranalysisV1alpha1RepoID
    A unique identifier for a Cloud Repo.
    """
    
    project_repo_id: Optional[GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectRepoId') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    
