from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatephotorequest


@dataclass_json
@dataclass
class BatchUpdatePhotosRequest:
    update_photo_requests: Optional[List[updatephotorequest.UpdatePhotoRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatePhotoRequests' }})
    
