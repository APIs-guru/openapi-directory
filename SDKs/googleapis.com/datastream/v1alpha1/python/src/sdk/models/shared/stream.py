from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StreamStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATED = "CREATED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    MAINTENANCE = "MAINTENANCE"
    FAILED = "FAILED"
    FAILED_PERMANENTLY = "FAILED_PERMANENTLY"
    STARTING = "STARTING"
    DRAINING = "DRAINING"


@dataclass_json
@dataclass
class StreamInput:
    backfill_all: Optional[BackfillAllStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backfillAll') }})
    backfill_none: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backfillNone') }})
    customer_managed_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedEncryptionKey') }})
    destination_config: Optional[DestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    source_config: Optional[SourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceConfig') }})
    state: Optional[StreamStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class Stream:
    backfill_all: Optional[BackfillAllStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backfillAll') }})
    backfill_none: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backfillNone') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    customer_managed_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedEncryptionKey') }})
    destination_config: Optional[DestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    errors: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_config: Optional[SourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceConfig') }})
    state: Optional[StreamStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
