from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaintegrationbundleconfig


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaUpdateBundleResponse:
    config: Optional[googlecloudintegrationsv1alphaintegrationbundleconfig.GoogleCloudIntegrationsV1alphaIntegrationBundleConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    
