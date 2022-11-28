from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectsRow:
    first_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationIds') }})
    locations: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    measurements: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurements') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: List[ProjectParameterDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    subtitle: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    bbox: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bbox') }})
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    is_analysis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAnalysis') }})
    is_mobile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMobile') }})
    sensor_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensorType') }})
    sources: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
