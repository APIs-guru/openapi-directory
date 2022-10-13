from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import thirdpartylinksnippet
from . import thirdpartylinkstatus


@dataclass_json
@dataclass
class ThirdPartyLink:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    linking_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkingToken' }})
    snippet: Optional[thirdpartylinksnippet.ThirdPartyLinkSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    status: Optional[thirdpartylinkstatus.ThirdPartyLinkStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
