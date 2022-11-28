from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IapSettings:
    r"""IapSettings
    The IAP configurable settings.
    """
    
    access_settings: Optional[AccessSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessSettings') }})
    application_settings: Optional[ApplicationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationSettings') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
