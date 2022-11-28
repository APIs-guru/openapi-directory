from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConnectionProfileProviderEnum(str, Enum):
    DATABASE_PROVIDER_UNSPECIFIED = "DATABASE_PROVIDER_UNSPECIFIED"
    CLOUDSQL = "CLOUDSQL"
    RDS = "RDS"
    AURORA = "AURORA"
    ALLOYDB = "ALLOYDB"

class ConnectionProfileStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    CREATING = "CREATING"
    READY = "READY"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DELETED = "DELETED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class ConnectionProfile:
    r"""ConnectionProfile
    A connection profile definition.
    """
    
    alloydb: Optional[AlloyDbConnectionProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alloydb') }})
    cloudsql: Optional[CloudSQLConnectionProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudsql') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mysql: Optional[MySQLConnectionProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysql') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    postgresql: Optional[PostgreSQLConnectionProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresql') }})
    provider: Optional[ConnectionProfileProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    state: Optional[ConnectionProfileStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class ConnectionProfileInput:
    r"""ConnectionProfileInput
    A connection profile definition.
    """
    
    alloydb: Optional[AlloyDbConnectionProfileInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alloydb') }})
    cloudsql: Optional[CloudSQLConnectionProfileInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudsql') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mysql: Optional[MySQLConnectionProfileInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysql') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    postgresql: Optional[PostgreSQLConnectionProfileInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresql') }})
    provider: Optional[ConnectionProfileProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    state: Optional[ConnectionProfileStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
