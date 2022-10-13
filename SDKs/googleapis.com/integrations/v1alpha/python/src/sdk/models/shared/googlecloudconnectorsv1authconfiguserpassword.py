from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudconnectorsv1secret


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfigUserPassword:
    password: Optional[googlecloudconnectorsv1secret.GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
