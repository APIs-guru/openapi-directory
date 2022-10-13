from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aliascontext


@dataclass_json
@dataclass
class GerritSourceContext:
    alias_context: Optional[aliascontext.AliasContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliasContext' }})
    gerrit_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gerritProject' }})
    host_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostUri' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
