from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudChannelV1ColumnDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    STRING = "STRING"
    INT = "INT"
    DECIMAL = "DECIMAL"
    MONEY = "MONEY"
    DATE = "DATE"
    DATE_TIME = "DATE_TIME"


@dataclass_json
@dataclass
class GoogleCloudChannelV1Column:
    r"""GoogleCloudChannelV1Column
    The definition of a report column. Specifies the data properties in the corresponding position of the report rows.
    """
    
    column_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnId') }})
    data_type: Optional[GoogleCloudChannelV1ColumnDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
