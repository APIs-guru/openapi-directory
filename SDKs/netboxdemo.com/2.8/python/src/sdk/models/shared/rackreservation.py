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
class RackReservation:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    rack: NestedRack = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack') }})
    units: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    user: NestedUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    tenant: Optional[NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
