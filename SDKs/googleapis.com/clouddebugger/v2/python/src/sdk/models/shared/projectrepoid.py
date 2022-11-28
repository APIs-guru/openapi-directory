from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProjectRepoID:
    r"""ProjectRepoID
    Selects a repo using a Google Cloud Platform project ID (e.g. winged-cargo-31) and a repo name within that project.
    """
    
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    repo_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoName') }})
    
