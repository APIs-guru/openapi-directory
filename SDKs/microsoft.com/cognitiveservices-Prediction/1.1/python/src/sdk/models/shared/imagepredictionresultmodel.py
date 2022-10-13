from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagetagpredictionmodel


@dataclass_json
@dataclass
class ImagePredictionResultModel:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    iteration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iteration' }})
    predictions: Optional[List[imagetagpredictionmodel.ImageTagPredictionModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predictions' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Project' }})
    
