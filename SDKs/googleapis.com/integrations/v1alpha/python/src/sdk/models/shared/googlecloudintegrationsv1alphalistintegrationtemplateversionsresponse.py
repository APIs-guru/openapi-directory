from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaintegrationtemplateversion


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse:
    integration_template_versions: Optional[List[googlecloudintegrationsv1alphaintegrationtemplateversion.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationTemplateVersions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
