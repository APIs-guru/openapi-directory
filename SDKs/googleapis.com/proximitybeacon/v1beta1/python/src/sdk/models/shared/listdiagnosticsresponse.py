from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import diagnostics


@dataclass_json
@dataclass
class ListDiagnosticsResponse:
    diagnostics: Optional[List[diagnostics.Diagnostics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnostics' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
