from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FloodlightGroupWebTagTypeEnum(str, Enum):
    WEB_TAG_TYPE_UNSPECIFIED = "WEB_TAG_TYPE_UNSPECIFIED"
    WEB_TAG_TYPE_NONE = "WEB_TAG_TYPE_NONE"
    WEB_TAG_TYPE_IMAGE = "WEB_TAG_TYPE_IMAGE"
    WEB_TAG_TYPE_DYNAMIC = "WEB_TAG_TYPE_DYNAMIC"


@dataclass_json
@dataclass
class FloodlightGroup:
    r"""FloodlightGroup
    A single Floodlight group.
    """
    
    active_view_config: Optional[ActiveViewVideoViewabilityMetricConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeViewConfig') }})
    custom_variables: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customVariables') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    floodlight_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightGroupId') }})
    lookback_window: Optional[LookbackWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookbackWindow') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    web_tag_type: Optional[FloodlightGroupWebTagTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webTagType') }})
    
