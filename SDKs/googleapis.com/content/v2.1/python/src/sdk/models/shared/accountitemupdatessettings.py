from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountItemUpdatesSettings:
    r"""AccountItemUpdatesSettings
    Settings for the Automatic Item Updates.
    """
    
    allow_availability_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAvailabilityUpdates') }})
    allow_condition_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowConditionUpdates') }})
    allow_price_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPriceUpdates') }})
    allow_strict_availability_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowStrictAvailabilityUpdates') }})
    
