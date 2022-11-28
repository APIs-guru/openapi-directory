from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SiteSettingsVpaidAdapterChoiceTemplateEnum(str, Enum):
    DEFAULT = "DEFAULT"
    FLASH = "FLASH"
    HTML5 = "HTML5"
    BOTH = "BOTH"


@dataclass_json
@dataclass
class SiteSettings:
    r"""SiteSettings
    Site Settings
    """
    
    active_view_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeViewOptOut') }})
    ad_blocking_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adBlockingOptOut') }})
    disable_new_cookie: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableNewCookie') }})
    tag_setting: Optional[TagSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagSetting') }})
    video_active_view_opt_out_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoActiveViewOptOutTemplate') }})
    vpaid_adapter_choice_template: Optional[SiteSettingsVpaidAdapterChoiceTemplateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpaidAdapterChoiceTemplate') }})
    
