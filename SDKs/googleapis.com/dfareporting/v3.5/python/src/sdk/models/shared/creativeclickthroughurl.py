from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreativeClickThroughURL:
    r"""CreativeClickThroughURL
    Click-through URL
    """
    
    computed_click_through_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computedClickThroughUrl') }})
    custom_click_through_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClickThroughUrl') }})
    landing_page_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landingPageId') }})
    
