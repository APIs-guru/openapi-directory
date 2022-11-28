from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationSettings:
    r"""ApplicationSettings
    Wrapper over application specific settings for IAP.
    """
    
    access_denied_page_settings: Optional[AccessDeniedPageSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessDeniedPageSettings') }})
    attribute_propagation_settings: Optional[AttributePropagationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributePropagationSettings') }})
    cookie_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieDomain') }})
    csm_settings: Optional[CsmSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csmSettings') }})
    
