from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import typedvalue

class CollectdValueDataSourceTypeEnum(str, Enum):
    UNSPECIFIED_DATA_SOURCE_TYPE = "UNSPECIFIED_DATA_SOURCE_TYPE"
    GAUGE = "GAUGE"
    COUNTER = "COUNTER"
    DERIVE = "DERIVE"
    ABSOLUTE = "ABSOLUTE"


@dataclass_json
@dataclass
class CollectdValue:
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceName' }})
    data_source_type: Optional[CollectdValueDataSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceType' }})
    value: Optional[typedvalue.TypedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
