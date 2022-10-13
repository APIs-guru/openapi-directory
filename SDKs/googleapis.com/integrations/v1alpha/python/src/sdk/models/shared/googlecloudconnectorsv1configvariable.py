from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudconnectorsv1secret


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1ConfigVariable:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolValue' }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    secret_value: Optional[googlecloudconnectorsv1secret.GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
