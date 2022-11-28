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
class ApplicationList:
    subactivity: Subactivity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subactivity') }})
    cert_authority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cert_authority') }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    current_status: Optional[ApplicationStatusCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_status') }})
    display_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_status') }})
    qualifications: Optional[List[Qualification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualifications') }})
    removal_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removal_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
