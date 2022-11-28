from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsentInformationResponse200JSON:
    r"""ConsentInformationResponse200JSON
    Body of the JSON response for a successfull get consent request.
    """
    
    access: AccountAccess = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    consent_status: ConsentStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentStatus') }})
    frequency_per_day: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyPerDay') }})
    last_action_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastActionDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recurring_indicator: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringIndicator') }})
    valid_until: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[dict[str, HrefType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    
