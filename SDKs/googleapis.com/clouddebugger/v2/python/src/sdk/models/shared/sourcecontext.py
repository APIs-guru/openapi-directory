from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudreposourcecontext
from . import cloudworkspacesourcecontext
from . import gerritsourcecontext
from . import gitsourcecontext


@dataclass_json
@dataclass
class SourceContext:
    cloud_repo: Optional[cloudreposourcecontext.CloudRepoSourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudRepo' }})
    cloud_workspace: Optional[cloudworkspacesourcecontext.CloudWorkspaceSourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWorkspace' }})
    gerrit: Optional[gerritsourcecontext.GerritSourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gerrit' }})
    git: Optional[gitsourcecontext.GitSourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    
