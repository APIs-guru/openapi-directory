from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnterpriseCrmEventbusProtoAttributesDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    EMAIL = "EMAIL"
    URL = "URL"
    CURRENCY = "CURRENCY"
    TIMESTAMP = "TIMESTAMP"
    DOMAIN_NAME = "DOMAIN_NAME"

class EnterpriseCrmEventbusProtoAttributesSearchableEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    YES = "YES"
    NO = "NO"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoAttributes:
    r"""EnterpriseCrmEventbusProtoAttributes
    Attributes are additional options that can be associated with each event property. For more information, see go/integration-platform/event_bus/attributes_registry.md. Next available: 8
    """
    
    data_type: Optional[EnterpriseCrmEventbusProtoAttributesDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    default_value: Optional[EnterpriseCrmEventbusProtoValueType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRequired') }})
    is_searchable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSearchable') }})
    log_settings: Optional[EnterpriseCrmEventbusProtoLogSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logSettings') }})
    searchable: Optional[EnterpriseCrmEventbusProtoAttributesSearchableEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchable') }})
    task_visibility: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskVisibility') }})
    
