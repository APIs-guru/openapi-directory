from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1AssetSecurityStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    READY = "READY"
    APPLYING = "APPLYING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetSecurityStatus:
    r"""GoogleCloudDataplexV1AssetSecurityStatus
    Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    state: Optional[GoogleCloudDataplexV1AssetSecurityStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
