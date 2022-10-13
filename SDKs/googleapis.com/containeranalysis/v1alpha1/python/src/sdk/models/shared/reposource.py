from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RepoSource:
    branch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    commit_sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitSha' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    repo_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoName' }})
    tag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagName' }})
    
