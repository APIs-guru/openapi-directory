from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObWriteFundsConfirmationResponse1DataFundsAvailableResult:
    r"""ObWriteFundsConfirmationResponse1DataFundsAvailableResult
    Result of a funds availability check.
    """
    
    funds_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsAvailable') }})
    funds_available_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsAvailableDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteFundsConfirmationResponse1Data:
    funds_available_result: Optional[ObWriteFundsConfirmationResponse1DataFundsAvailableResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsAvailableResult') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    

@dataclass_json
@dataclass
class ObWriteFundsConfirmationResponse1:
    data: ObWriteFundsConfirmationResponse1Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
