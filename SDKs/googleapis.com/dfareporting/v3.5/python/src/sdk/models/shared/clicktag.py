from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import creativeclickthroughurl


@dataclass_json
@dataclass
class ClickTag:
    click_through_url: Optional[creativeclickthroughurl.CreativeClickThroughURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThroughUrl' }})
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
