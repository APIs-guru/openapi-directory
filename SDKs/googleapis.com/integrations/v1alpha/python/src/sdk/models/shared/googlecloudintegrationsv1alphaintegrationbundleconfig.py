from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntegrationBundleConfig:
    integrations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrations' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    
