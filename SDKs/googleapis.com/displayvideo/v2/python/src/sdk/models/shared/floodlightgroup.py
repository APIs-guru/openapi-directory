from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import activeviewvideoviewabilitymetricconfig
from . import lookbackwindow

class FloodlightGroupWebTagTypeEnum(str, Enum):
    WEB_TAG_TYPE_UNSPECIFIED = "WEB_TAG_TYPE_UNSPECIFIED"
    WEB_TAG_TYPE_NONE = "WEB_TAG_TYPE_NONE"
    WEB_TAG_TYPE_IMAGE = "WEB_TAG_TYPE_IMAGE"
    WEB_TAG_TYPE_DYNAMIC = "WEB_TAG_TYPE_DYNAMIC"


@dataclass_json
@dataclass
class FloodlightGroup:
    active_view_config: Optional[activeviewvideoviewabilitymetricconfig.ActiveViewVideoViewabilityMetricConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeViewConfig' }})
    custom_variables: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customVariables' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    floodlight_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightGroupId' }})
    lookback_window: Optional[lookbackwindow.LookbackWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookbackWindow' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    web_tag_type: Optional[FloodlightGroupWebTagTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webTagType' }})
    
