from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import predictiontag
from . import imagetag


@dataclass_json
@dataclass
class Image:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUri' }})
    predictions: Optional[List[predictiontag.PredictionTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predictions' }})
    tags: Optional[List[imagetag.ImageTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    thumbnail_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailUri' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    
