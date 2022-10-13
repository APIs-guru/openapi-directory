from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AndroidAppInfo:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionName' }})
    
