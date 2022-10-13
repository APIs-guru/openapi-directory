from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Proximity:
    window_after: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowAfter' }})
    window_before: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowBefore' }})
    
