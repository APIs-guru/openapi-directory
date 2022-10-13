from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import prediction
from . import imageregion
from . import imagetag


@dataclass_json
@dataclass
class ImagePerformance:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    predictions: Optional[List[prediction.Prediction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictions' }})
    regions: Optional[List[imageregion.ImageRegion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    tags: Optional[List[imagetag.ImageTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    thumbnail_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUri' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
