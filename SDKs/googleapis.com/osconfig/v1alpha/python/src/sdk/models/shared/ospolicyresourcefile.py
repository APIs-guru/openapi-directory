from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourcefilegcs
from . import ospolicyresourcefileremote


@dataclass_json
@dataclass
class OsPolicyResourceFile:
    allow_insecure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowInsecure' }})
    gcs: Optional[ospolicyresourcefilegcs.OsPolicyResourceFileGcs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcs' }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPath' }})
    remote: Optional[ospolicyresourcefileremote.OsPolicyResourceFileRemote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote' }})
    
