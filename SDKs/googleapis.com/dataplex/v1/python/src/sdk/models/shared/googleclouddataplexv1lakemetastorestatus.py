from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1LakeMetastoreStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    NONE = "NONE"
    READY = "READY"
    UPDATING = "UPDATING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1LakeMetastoreStatus:
    r"""GoogleCloudDataplexV1LakeMetastoreStatus
    Status of Lake and Dataproc Metastore service instance association.
    """
    
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    state: Optional[GoogleCloudDataplexV1LakeMetastoreStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
