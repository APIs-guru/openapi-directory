from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"

class BatchUpdateValuesByDataFilterRequestValueInputOptionEnum(str, Enum):
    INPUT_VALUE_OPTION_UNSPECIFIED = "INPUT_VALUE_OPTION_UNSPECIFIED"
    RAW = "RAW"
    USER_ENTERED = "USER_ENTERED"


@dataclass_json
@dataclass
class BatchUpdateValuesByDataFilterRequest:
    r"""BatchUpdateValuesByDataFilterRequest
    The request for updating more than one range of values in a spreadsheet.
    """
    
    data: Optional[List[DataFilterValueRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    include_values_in_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeValuesInResponse') }})
    response_date_time_render_option: Optional[BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseDateTimeRenderOption') }})
    response_value_render_option: Optional[BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseValueRenderOption') }})
    value_input_option: Optional[BatchUpdateValuesByDataFilterRequestValueInputOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInputOption') }})
    
