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
class UpdateDimensionGroupRequest:
    r"""UpdateDimensionGroupRequest
    Updates the state of the specified group.
    """
    
    dimension_group: Optional[DimensionGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionGroup') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
