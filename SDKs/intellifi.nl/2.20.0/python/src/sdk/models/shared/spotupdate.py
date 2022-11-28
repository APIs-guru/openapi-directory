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
class SpotUpdateAntennaReportLocationsInput:
    antenna_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antenna_number') }})
    

@dataclass_json
@dataclass
class SpotUpdateInput:
    antenna_report_locations: Optional[List[SpotUpdateAntennaReportLocationsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antenna_report_locations') }})
    config_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_request') }})
    geo_coords: Optional[GeoCoordsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geo_coords') }})
    report_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_location') }})
    senses_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senses_request') }})
    
