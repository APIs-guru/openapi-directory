from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2versiontopath


@dataclass_json
@dataclass
class GoogleCloudRunV2SecretVolumeSource:
    default_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultMode' }})
    items: Optional[List[googlecloudrunv2versiontopath.GoogleCloudRunV2VersionToPath]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
