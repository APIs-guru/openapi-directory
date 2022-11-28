from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CollectdValueDataSourceTypeEnum(str, Enum):
    UNSPECIFIED_DATA_SOURCE_TYPE = "UNSPECIFIED_DATA_SOURCE_TYPE"
    GAUGE = "GAUGE"
    COUNTER = "COUNTER"
    DERIVE = "DERIVE"
    ABSOLUTE = "ABSOLUTE"


@dataclass_json
@dataclass
class CollectdValue:
    r"""CollectdValue
    A single data point from a collectd-based plugin.
    """
    
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceName') }})
    data_source_type: Optional[CollectdValueDataSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceType') }})
    value: Optional[TypedValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
