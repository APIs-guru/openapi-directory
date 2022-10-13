from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaintegrationversion


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse:
    integration_version: Optional[googlecloudintegrationsv1alphaintegrationversion.GoogleCloudIntegrationsV1alphaIntegrationVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationVersion' }})
    
