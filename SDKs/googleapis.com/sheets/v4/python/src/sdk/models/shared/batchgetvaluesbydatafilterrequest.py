from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class BatchGetValuesByDataFilterRequestMajorDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"

class BatchGetValuesByDataFilterRequestValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"


@dataclass_json
@dataclass
class BatchGetValuesByDataFilterRequest:
    r"""BatchGetValuesByDataFilterRequest
    The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
    """
    
    data_filters: Optional[List[DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    date_time_render_option: Optional[BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTimeRenderOption') }})
    major_dimension: Optional[BatchGetValuesByDataFilterRequestMajorDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorDimension') }})
    value_render_option: Optional[BatchGetValuesByDataFilterRequestValueRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueRenderOption') }})
    
