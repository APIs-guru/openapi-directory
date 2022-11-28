from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DynamicGroupQueryResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    USER = "USER"


@dataclass_json
@dataclass
class DynamicGroupQuery:
    r"""DynamicGroupQuery
    Defines a query on a resource.
    """
    
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    resource_type: Optional[DynamicGroupQueryResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
