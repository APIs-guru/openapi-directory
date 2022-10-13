from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RepoSource:
    branch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    commit_sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitSha' }})
    dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dir' }})
    invert_regex: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invertRegex' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    repo_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoName' }})
    substitutions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'substitutions' }})
    tag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagName' }})
    
