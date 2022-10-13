from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nfsexportoptions


@dataclass_json
@dataclass
class FileShareConfig:
    capacity_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityGb' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nfs_export_options: Optional[List[nfsexportoptions.NfsExportOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfsExportOptions' }})
    source_backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceBackup' }})
    
