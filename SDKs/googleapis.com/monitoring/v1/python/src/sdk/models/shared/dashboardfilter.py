from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DashboardFilterFilterTypeEnum(str, Enum):
    FILTER_TYPE_UNSPECIFIED = "FILTER_TYPE_UNSPECIFIED"
    RESOURCE_LABEL = "RESOURCE_LABEL"
    METRIC_LABEL = "METRIC_LABEL"
    USER_METADATA_LABEL = "USER_METADATA_LABEL"
    SYSTEM_METADATA_LABEL = "SYSTEM_METADATA_LABEL"
    GROUP = "GROUP"


@dataclass_json
@dataclass
class DashboardFilter:
    filter_type: Optional[DashboardFilterFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterType' }})
    label_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelKey' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    template_variable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateVariable' }})
    
