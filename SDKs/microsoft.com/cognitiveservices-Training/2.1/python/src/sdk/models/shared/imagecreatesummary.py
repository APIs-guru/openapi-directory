from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagecreateresult


@dataclass_json
@dataclass
class ImageCreateSummary:
    images: Optional[List[imagecreateresult.ImageCreateResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    is_batch_successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBatchSuccessful' }})
    
