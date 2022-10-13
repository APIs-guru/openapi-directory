from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inventorysourcedisplaycreativeconfig
from . import inventorysourcevideocreativeconfig

class CreativeConfigCreativeTypeEnum(str, Enum):
    CREATIVE_TYPE_UNSPECIFIED = "CREATIVE_TYPE_UNSPECIFIED"
    CREATIVE_TYPE_STANDARD = "CREATIVE_TYPE_STANDARD"
    CREATIVE_TYPE_EXPANDABLE = "CREATIVE_TYPE_EXPANDABLE"
    CREATIVE_TYPE_VIDEO = "CREATIVE_TYPE_VIDEO"
    CREATIVE_TYPE_NATIVE = "CREATIVE_TYPE_NATIVE"
    CREATIVE_TYPE_TEMPLATED_APP_INSTALL = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL"
    CREATIVE_TYPE_NATIVE_SITE_SQUARE = "CREATIVE_TYPE_NATIVE_SITE_SQUARE"
    CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL"
    CREATIVE_TYPE_LIGHTBOX = "CREATIVE_TYPE_LIGHTBOX"
    CREATIVE_TYPE_NATIVE_APP_INSTALL = "CREATIVE_TYPE_NATIVE_APP_INSTALL"
    CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE"
    CREATIVE_TYPE_AUDIO = "CREATIVE_TYPE_AUDIO"
    CREATIVE_TYPE_PUBLISHER_HOSTED = "CREATIVE_TYPE_PUBLISHER_HOSTED"
    CREATIVE_TYPE_NATIVE_VIDEO = "CREATIVE_TYPE_NATIVE_VIDEO"
    CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"


@dataclass_json
@dataclass
class CreativeConfig:
    creative_type: Optional[CreativeConfigCreativeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeType' }})
    display_creative_config: Optional[inventorysourcedisplaycreativeconfig.InventorySourceDisplayCreativeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayCreativeConfig' }})
    video_creative_config: Optional[inventorysourcevideocreativeconfig.InventorySourceVideoCreativeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoCreativeConfig' }})
    
