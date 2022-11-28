from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DashboardFilter
    A filter to reduce the amount of data charted in relevant widgets.
    """
    
    filter_type: Optional[DashboardFilterFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterType') }})
    label_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelKey') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    template_variable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateVariable') }})
    
