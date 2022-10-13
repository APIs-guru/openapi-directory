from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import debugoptions


@dataclass_json
@dataclass
class SearchItemsByViewURLRequest:
    debug_options: Optional[debugoptions.DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugOptions' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    view_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewUrl' }})
    
