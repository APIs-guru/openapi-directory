from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2idpconfig
from . import googlecloudidentitytoolkitadminv2spconfig


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    idp_config: Optional[googlecloudidentitytoolkitadminv2idpconfig.GoogleCloudIdentitytoolkitAdminV2IdpConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idpConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sp_config: Optional[googlecloudidentitytoolkitadminv2spconfig.GoogleCloudIdentitytoolkitAdminV2SpConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spConfig' }})
    
