from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphacertificate


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListCertificatesResponse:
    certificates: Optional[List[googlecloudintegrationsv1alphacertificate.GoogleCloudIntegrationsV1alphaCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
