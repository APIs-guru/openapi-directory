from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FlagAppliesToEnum(str, Enum):
    SQL_DATABASE_VERSION_UNSPECIFIED = "SQL_DATABASE_VERSION_UNSPECIFIED"
    MYSQL_5_1 = "MYSQL_5_1"
    MYSQL_5_5 = "MYSQL_5_5"
    MYSQL_5_6 = "MYSQL_5_6"
    MYSQL_5_7 = "MYSQL_5_7"
    SQLSERVER_2017_STANDARD = "SQLSERVER_2017_STANDARD"
    SQLSERVER_2017_ENTERPRISE = "SQLSERVER_2017_ENTERPRISE"
    SQLSERVER_2017_EXPRESS = "SQLSERVER_2017_EXPRESS"
    SQLSERVER_2017_WEB = "SQLSERVER_2017_WEB"
    POSTGRES_9_6 = "POSTGRES_9_6"
    POSTGRES_10 = "POSTGRES_10"
    POSTGRES_11 = "POSTGRES_11"
    POSTGRES_12 = "POSTGRES_12"
    POSTGRES_13 = "POSTGRES_13"
    POSTGRES_14 = "POSTGRES_14"
    MYSQL_8_0 = "MYSQL_8_0"
    MYSQL_8_0_18 = "MYSQL_8_0_18"
    MYSQL_8_0_26 = "MYSQL_8_0_26"
    MYSQL_8_0_27 = "MYSQL_8_0_27"
    MYSQL_8_0_28 = "MYSQL_8_0_28"
    MYSQL_8_0_29 = "MYSQL_8_0_29"
    MYSQL_8_0_30 = "MYSQL_8_0_30"
    SQLSERVER_2019_STANDARD = "SQLSERVER_2019_STANDARD"
    SQLSERVER_2019_ENTERPRISE = "SQLSERVER_2019_ENTERPRISE"
    SQLSERVER_2019_EXPRESS = "SQLSERVER_2019_EXPRESS"
    SQLSERVER_2019_WEB = "SQLSERVER_2019_WEB"

class FlagTypeEnum(str, Enum):
    SQL_FLAG_TYPE_UNSPECIFIED = "SQL_FLAG_TYPE_UNSPECIFIED"
    BOOLEAN = "BOOLEAN"
    STRING = "STRING"
    INTEGER = "INTEGER"
    NONE = "NONE"
    MYSQL_TIMEZONE_OFFSET = "MYSQL_TIMEZONE_OFFSET"
    FLOAT = "FLOAT"
    REPEATED_STRING = "REPEATED_STRING"


@dataclass_json
@dataclass
class Flag:
    r"""Flag
    A flag resource.
    """
    
    allowed_int_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIntValues') }})
    allowed_string_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedStringValues') }})
    applies_to: Optional[List[FlagAppliesToEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliesTo') }})
    in_beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inBeta') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    max_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    requires_restart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresRestart') }})
    type: Optional[FlagTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
