from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2secretkeyselector


@dataclass_json
@dataclass
class GoogleCloudRunV2EnvVarSource:
    secret_key_ref: Optional[googlecloudrunv2secretkeyselector.GoogleCloudRunV2SecretKeySelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretKeyRef' }})
    
