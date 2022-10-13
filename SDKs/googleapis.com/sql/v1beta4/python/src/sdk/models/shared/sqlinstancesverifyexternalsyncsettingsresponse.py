from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sqlexternalsyncsettingerror
from . import sqlexternalsyncsettingerror


@dataclass_json
@dataclass
class SQLInstancesVerifyExternalSyncSettingsResponse:
    errors: Optional[List[sqlexternalsyncsettingerror.SQLExternalSyncSettingError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    warnings: Optional[List[sqlexternalsyncsettingerror.SQLExternalSyncSettingError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
