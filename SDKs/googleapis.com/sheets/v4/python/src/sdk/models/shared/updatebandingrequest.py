from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateBandingRequest:
    r"""UpdateBandingRequest
    Updates properties of the supplied banded range.
    """
    
    banded_range: Optional[BandedRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRange') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
