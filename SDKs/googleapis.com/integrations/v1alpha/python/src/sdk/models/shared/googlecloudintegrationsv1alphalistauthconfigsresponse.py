from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaauthconfig


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListAuthConfigsResponse:
    auth_configs: Optional[List[googlecloudintegrationsv1alphaauthconfig.GoogleCloudIntegrationsV1alphaAuthConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
