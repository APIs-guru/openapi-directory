from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import volumebackup


@dataclass_json
@dataclass
class ListVolumeBackupsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    volume_backups: Optional[List[volumebackup.VolumeBackup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeBackups' }})
    
