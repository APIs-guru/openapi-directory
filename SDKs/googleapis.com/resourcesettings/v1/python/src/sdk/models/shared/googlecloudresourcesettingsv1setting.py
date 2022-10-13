from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudresourcesettingsv1value
from . import googlecloudresourcesettingsv1value
from . import googlecloudresourcesettingsv1settingmetadata


@dataclass_json
@dataclass
class GoogleCloudResourcesettingsV1Setting:
    effective_value: Optional[googlecloudresourcesettingsv1value.GoogleCloudResourcesettingsV1Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveValue' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    local_value: Optional[googlecloudresourcesettingsv1value.GoogleCloudResourcesettingsV1Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localValue' }})
    metadata: Optional[googlecloudresourcesettingsv1settingmetadata.GoogleCloudResourcesettingsV1SettingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
