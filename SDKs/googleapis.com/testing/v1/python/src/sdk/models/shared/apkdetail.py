from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apkmanifest


@dataclass_json
@dataclass
class ApkDetail:
    apk_manifest: Optional[apkmanifest.ApkManifest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apkManifest' }})
    
