from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2cloudsqlinstance
from . import googlecloudrunv2secretvolumesource


@dataclass_json
@dataclass
class GoogleCloudRunV2Volume:
    cloud_sql_instance: Optional[googlecloudrunv2cloudsqlinstance.GoogleCloudRunV2CloudSQLInstance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSqlInstance' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secret: Optional[googlecloudrunv2secretvolumesource.GoogleCloudRunV2SecretVolumeSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
