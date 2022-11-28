from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class YarnApplicationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    NEW = "NEW"
    NEW_SAVING = "NEW_SAVING"
    SUBMITTED = "SUBMITTED"
    ACCEPTED = "ACCEPTED"
    RUNNING = "RUNNING"
    FINISHED = "FINISHED"
    FAILED = "FAILED"
    KILLED = "KILLED"


@dataclass_json
@dataclass
class YarnApplication:
    r"""YarnApplication
    A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    state: Optional[YarnApplicationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingUrl') }})
    
