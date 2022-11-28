from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PagespeedAPIPagespeedResponseV5:
    r"""PagespeedAPIPagespeedResponseV5
    The Pagespeed API response object.
    """
    
    analysis_utc_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisUTCTimestamp') }})
    captcha_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captchaResult') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    lighthouse_result: Optional[LighthouseResultV5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lighthouseResult') }})
    loading_experience: Optional[PagespeedAPILoadingExperienceV5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadingExperience') }})
    origin_loading_experience: Optional[PagespeedAPILoadingExperienceV5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originLoadingExperience') }})
    version: Optional[PagespeedVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
