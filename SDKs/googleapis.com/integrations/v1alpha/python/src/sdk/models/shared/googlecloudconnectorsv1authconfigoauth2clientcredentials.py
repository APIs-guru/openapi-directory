from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudconnectorsv1secret


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: Optional[googlecloudconnectorsv1secret.GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    
