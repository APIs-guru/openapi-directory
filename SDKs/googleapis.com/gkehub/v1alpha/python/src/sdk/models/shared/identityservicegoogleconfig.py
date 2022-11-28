from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentityServiceGoogleConfig:
    r"""IdentityServiceGoogleConfig
    Configuration for the Google Plugin Auth flow.
    """
    
    disable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disable') }})
    
