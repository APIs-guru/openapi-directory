from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClickThroughURL:
    computed_click_through_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computedClickThroughUrl' }})
    custom_click_through_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customClickThroughUrl' }})
    default_landing_page: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLandingPage' }})
    landing_page_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landingPageId' }})
    
