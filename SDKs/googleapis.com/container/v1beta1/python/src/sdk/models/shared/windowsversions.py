from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import windowsversion


@dataclass_json
@dataclass
class WindowsVersions:
    windows_versions: Optional[List[windowsversion.WindowsVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsVersions' }})
    
