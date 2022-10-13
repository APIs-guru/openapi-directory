from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudconnectorsv1secret
from . import googlecloudconnectorsv1authconfigoauth2jwtbearerjwtclaims


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer:
    client_key: Optional[googlecloudconnectorsv1secret.GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientKey' }})
    jwt_claims: Optional[googlecloudconnectorsv1authconfigoauth2jwtbearerjwtclaims.GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtClaims' }})
    
