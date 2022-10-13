from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reusableconfigvalues


@dataclass_json
@dataclass
class ReusableConfigWrapper:
    reusable_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reusableConfig' }})
    reusable_config_values: Optional[reusableconfigvalues.ReusableConfigValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reusableConfigValues' }})
    
