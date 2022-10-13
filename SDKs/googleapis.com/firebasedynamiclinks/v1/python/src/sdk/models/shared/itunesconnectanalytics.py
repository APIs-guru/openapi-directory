from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ITunesConnectAnalytics:
    at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'at' }})
    ct: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ct' }})
    mt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mt' }})
    pt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pt' }})
    
