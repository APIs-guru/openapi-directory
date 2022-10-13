from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clickthroughurl


@dataclass_json
@dataclass
class CompanionClickThroughOverride:
    click_through_url: Optional[clickthroughurl.ClickThroughURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThroughUrl' }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeId' }})
    
