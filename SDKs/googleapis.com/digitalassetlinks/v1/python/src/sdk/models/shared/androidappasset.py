from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import certificateinfo


@dataclass_json
@dataclass
class AndroidAppAsset:
    certificate: Optional[certificateinfo.CertificateInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    
