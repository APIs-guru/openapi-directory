from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import businesshourinputmodel
from . import businesshourinputmodel
from . import businesshourinputmodel
from . import businesshourinputmodel
from . import businesshourinputmodel
from . import businesshourinputmodel
from . import businesshourinputmodel


@dataclass_json
@dataclass
class BusinessHoursInputModel:
    fri: Optional[businesshourinputmodel.BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fri' }})
    mon: Optional[businesshourinputmodel.BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mon' }})
    sat: Optional[businesshourinputmodel.BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sat' }})
    sun: Optional[businesshourinputmodel.BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sun' }})
    thu: Optional[businesshourinputmodel.BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thu' }})
    tue: Optional[businesshourinputmodel.BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tue' }})
    wed: Optional[businesshourinputmodel.BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wed' }})
    
