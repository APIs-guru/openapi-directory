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
class LandlordMaintenanceCertificateModel:
    r"""LandlordMaintenanceCertificateModel
    Maintenance Certificate
    """
    
    due: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Due'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    files: Optional[List[LettingsLandlordDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Files') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
