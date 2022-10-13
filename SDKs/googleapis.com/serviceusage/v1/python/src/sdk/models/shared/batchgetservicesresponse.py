from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleapiserviceusagev1service


@dataclass_json
@dataclass
class BatchGetServicesResponse:
    services: Optional[List[googleapiserviceusagev1service.GoogleAPIServiceusageV1Service]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
