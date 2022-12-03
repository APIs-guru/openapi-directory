from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClaimEventV1:
    r"""ClaimEventV1
    A claim event describes an event that either was a filed claim or would have warranted a claim if the customer had coverage at the time. `claim_event` can be the [`input_type`](https://www.heraldapi.com/docs/input-types) of a parameter on an [application](https://www.heraldapi.com/docs/application).  
    """
    
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
