from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tagsetting

class SiteSettingsVpaidAdapterChoiceTemplateEnum(str, Enum):
    DEFAULT = "DEFAULT"
    FLASH = "FLASH"
    HTML5 = "HTML5"
    BOTH = "BOTH"


@dataclass_json
@dataclass
class SiteSettings:
    active_view_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeViewOptOut' }})
    ad_blocking_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adBlockingOptOut' }})
    disable_new_cookie: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableNewCookie' }})
    tag_setting: Optional[tagsetting.TagSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagSetting' }})
    video_active_view_opt_out_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoActiveViewOptOutTemplate' }})
    vpaid_adapter_choice_template: Optional[SiteSettingsVpaidAdapterChoiceTemplateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpaidAdapterChoiceTemplate' }})
    
