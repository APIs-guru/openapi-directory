from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2spcertificate


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2SpConfig:
    callback_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackUri' }})
    sp_certificates: Optional[List[googlecloudidentitytoolkitadminv2spcertificate.GoogleCloudIdentitytoolkitAdminV2SpCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spCertificates' }})
    sp_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spEntityId' }})
    
