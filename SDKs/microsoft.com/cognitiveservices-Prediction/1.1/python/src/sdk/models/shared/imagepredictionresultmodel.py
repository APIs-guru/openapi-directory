from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImagePredictionResultModel:
    r"""ImagePredictionResultModel
    result of an image prediction request
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    iteration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iteration') }})
    predictions: Optional[List[ImageTagPredictionModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predictions') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Project') }})
    
