from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringConfig:
    r"""MonitoringConfig
    MonitoringConfig is cluster monitoring configuration.
    """
    
    component_config: Optional[MonitoringComponentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentConfig') }})
    managed_prometheus_config: Optional[ManagedPrometheusConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedPrometheusConfig') }})
    
