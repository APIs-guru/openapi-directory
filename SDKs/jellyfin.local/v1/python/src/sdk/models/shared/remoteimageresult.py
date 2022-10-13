from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import remoteimageinfo


@dataclass_json
@dataclass
class RemoteImageResult:
    images: Optional[List[remoteimageinfo.RemoteImageInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Images' }})
    providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Providers' }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRecordCount' }})
    
