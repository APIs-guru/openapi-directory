from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppDevExperienceFeatureState:
    r"""AppDevExperienceFeatureState
    State for App Dev Exp Feature.
    """
    
    networking_install_succeeded: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkingInstallSucceeded') }})
    
