from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReusableConfigWrapper:
    r"""ReusableConfigWrapper
    A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.
    """
    
    reusable_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reusableConfig') }})
    reusable_config_values: Optional[ReusableConfigValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reusableConfigValues') }})
    
