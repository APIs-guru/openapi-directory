from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filereference
from . import iosdevicefile
from . import iosdevicefile


@dataclass_json
@dataclass
class IosTestSetup:
    additional_ipas: Optional[List[filereference.FileReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalIpas' }})
    network_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkProfile' }})
    pull_directories: Optional[List[iosdevicefile.IosDeviceFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullDirectories' }})
    push_files: Optional[List[iosdevicefile.IosDeviceFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushFiles' }})
    
