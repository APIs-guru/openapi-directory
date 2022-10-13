from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudstoragefile


@dataclass_json
@dataclass
class CloudStorageSink:
    files: Optional[List[cloudstoragefile.CloudStorageFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    
