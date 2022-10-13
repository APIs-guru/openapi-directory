from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudsqlsettings


@dataclass_json
@dataclass
class CloudSQLConnectionProfile:
    cloud_sql_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSqlId' }})
    private_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIp' }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIp' }})
    settings: Optional[cloudsqlsettings.CloudSQLSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
