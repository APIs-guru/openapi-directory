from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__config


@dataclass_json
@dataclass
class GoogleCloudMlV1GetConfigResponse:
    config: Optional[googlecloudmlv1__config.GoogleCloudMlV1Config] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    service_account_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountProject' }})
    
