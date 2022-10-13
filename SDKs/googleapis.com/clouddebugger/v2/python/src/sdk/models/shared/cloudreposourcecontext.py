from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aliascontext
from . import repoid


@dataclass_json
@dataclass
class CloudRepoSourceContext:
    alias_context: Optional[aliascontext.AliasContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliasContext' }})
    alias_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliasName' }})
    repo_id: Optional[repoid.RepoID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoId' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
