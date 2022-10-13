from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import monitoringcomponentconfig
from . import managedprometheusconfig


@dataclass_json
@dataclass
class MonitoringConfig:
    component_config: Optional[monitoringcomponentconfig.MonitoringComponentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentConfig' }})
    managed_prometheus_config: Optional[managedprometheusconfig.ManagedPrometheusConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedPrometheusConfig' }})
    
