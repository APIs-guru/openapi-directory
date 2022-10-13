from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OmnitureSettings:
    omniture_cost_data_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'omnitureCostDataEnabled' }})
    omniture_integration_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'omnitureIntegrationEnabled' }})
    
