from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import membersnippet


@dataclass_json
@dataclass
class Member:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[membersnippet.MemberSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
