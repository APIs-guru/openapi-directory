from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DefaultClickThroughEventTagProperties:
    r"""DefaultClickThroughEventTagProperties
    Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
    """
    
    default_click_through_event_tag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultClickThroughEventTagId') }})
    override_inherited_event_tag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideInheritedEventTag') }})
    
