from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Consents:
    r"""Consents
    Content of the body of a consent request.
    
    """
    
    access: AccountAccess = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    combined_service_indicator: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedServiceIndicator') }})
    frequency_per_day: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyPerDay') }})
    recurring_indicator: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringIndicator') }})
    valid_until: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
