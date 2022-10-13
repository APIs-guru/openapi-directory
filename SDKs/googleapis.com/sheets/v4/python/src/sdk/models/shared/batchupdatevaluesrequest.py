from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import valuerange

class BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class BatchUpdateValuesRequestResponseValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"

class BatchUpdateValuesRequestValueInputOptionEnum(str, Enum):
    INPUT_VALUE_OPTION_UNSPECIFIED = "INPUT_VALUE_OPTION_UNSPECIFIED"
    RAW = "RAW"
    USER_ENTERED = "USER_ENTERED"


@dataclass_json
@dataclass
class BatchUpdateValuesRequest:
    data: Optional[List[valuerange.ValueRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    include_values_in_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeValuesInResponse' }})
    response_date_time_render_option: Optional[BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseDateTimeRenderOption' }})
    response_value_render_option: Optional[BatchUpdateValuesRequestResponseValueRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseValueRenderOption' }})
    value_input_option: Optional[BatchUpdateValuesRequestValueInputOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueInputOption' }})
    
