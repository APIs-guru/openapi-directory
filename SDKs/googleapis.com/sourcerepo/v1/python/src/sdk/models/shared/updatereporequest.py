from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import repo


@dataclass_json
@dataclass
class UpdateRepoRequest:
    repo: Optional[repo.Repo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
