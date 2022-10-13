from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotovaluetype
from . import enterprisecrmeventbusprotologsettings

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
    data_type: Optional[EnterpriseCrmEventbusProtoAttributesDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    default_value: Optional[enterprisecrmeventbusprotovaluetype.EnterpriseCrmEventbusProtoValueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRequired' }})
    is_searchable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSearchable' }})
    log_settings: Optional[enterprisecrmeventbusprotologsettings.EnterpriseCrmEventbusProtoLogSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logSettings' }})
    searchable: Optional[EnterpriseCrmEventbusProtoAttributesSearchableEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchable' }})
    task_visibility: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskVisibility' }})
    
