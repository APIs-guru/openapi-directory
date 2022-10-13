from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gitlabrepositoryid


@dataclass_json
@dataclass
class GitLabRepository:
    browse_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browseUri' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    repository_id: Optional[gitlabrepositoryid.GitLabRepositoryID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryId' }})
    
