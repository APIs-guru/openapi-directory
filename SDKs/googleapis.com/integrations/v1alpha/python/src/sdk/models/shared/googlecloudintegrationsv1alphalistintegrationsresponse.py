from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaintegration


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListIntegrationsResponse:
    integrations: Optional[List[googlecloudintegrationsv1alphaintegration.GoogleCloudIntegrationsV1alphaIntegration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
