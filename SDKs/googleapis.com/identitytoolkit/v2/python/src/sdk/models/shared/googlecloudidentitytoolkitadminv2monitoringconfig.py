from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2requestlogging


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2MonitoringConfig:
    request_logging: Optional[googlecloudidentitytoolkitadminv2requestlogging.GoogleCloudIdentitytoolkitAdminV2RequestLogging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestLogging' }})
    
