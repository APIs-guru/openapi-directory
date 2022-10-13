from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accessdeniedpagesettings
from . import attributepropagationsettings
from . import csmsettings


@dataclass_json
@dataclass
class ApplicationSettings:
    access_denied_page_settings: Optional[accessdeniedpagesettings.AccessDeniedPageSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessDeniedPageSettings' }})
    attribute_propagation_settings: Optional[attributepropagationsettings.AttributePropagationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributePropagationSettings' }})
    cookie_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieDomain' }})
    csm_settings: Optional[csmsettings.CsmSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csmSettings' }})
    
