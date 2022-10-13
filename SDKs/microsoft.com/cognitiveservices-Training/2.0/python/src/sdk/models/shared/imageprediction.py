from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import prediction


@dataclass_json
@dataclass
class ImagePrediction:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iteration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iteration' }})
    predictions: Optional[List[prediction.Prediction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictions' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    
