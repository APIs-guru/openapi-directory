from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import storagesource


@dataclass_json
@dataclass
class GenerateUploadURLResponse:
    storage_source: Optional[storagesource.StorageSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageSource' }})
    upload_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadUrl' }})
    
