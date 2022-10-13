from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue:
    absolute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absolute' }})
    percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    
