from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlerpcstatus


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Error:
    details: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    timestamps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamps' }})
    
