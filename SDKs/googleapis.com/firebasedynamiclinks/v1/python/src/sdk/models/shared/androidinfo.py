from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AndroidInfo:
    android_fallback_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidFallbackLink' }})
    android_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidLink' }})
    android_min_package_version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidMinPackageVersionCode' }})
    android_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidPackageName' }})
    
