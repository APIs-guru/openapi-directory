from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCancelExecutionResponse:
    is_canceled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCanceled' }})
    
