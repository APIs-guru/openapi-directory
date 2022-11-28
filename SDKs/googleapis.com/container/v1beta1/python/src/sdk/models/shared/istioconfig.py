from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IstioConfigAuthEnum(str, Enum):
    AUTH_NONE = "AUTH_NONE"
    AUTH_MUTUAL_TLS = "AUTH_MUTUAL_TLS"


@dataclass_json
@dataclass
class IstioConfig:
    r"""IstioConfig
    Configuration options for Istio addon.
    """
    
    auth: Optional[IstioConfigAuthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    
