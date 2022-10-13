from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoadSnapshotRequest:
    skip_pypi_packages_installation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipPypiPackagesInstallation' }})
    snapshot_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotPath' }})
    
