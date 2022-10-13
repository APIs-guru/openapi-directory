from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datafiltervaluerange

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
    data: Optional[List[datafiltervaluerange.DataFilterValueRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    include_values_in_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeValuesInResponse' }})
    response_date_time_render_option: Optional[BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseDateTimeRenderOption' }})
    response_value_render_option: Optional[BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseValueRenderOption' }})
    value_input_option: Optional[BatchUpdateValuesByDataFilterRequestValueInputOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueInputOption' }})
    
