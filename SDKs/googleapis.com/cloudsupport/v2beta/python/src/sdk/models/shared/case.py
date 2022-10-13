from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import caseclassification
from . import actor

class CasePriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    P0 = "P0"
    P1 = "P1"
    P2 = "P2"
    P3 = "P3"
    P4 = "P4"

class CaseSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    S0 = "S0"
    S1 = "S1"
    S2 = "S2"
    S3 = "S3"
    S4 = "S4"

class CaseStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    NEW = "NEW"
    IN_PROGRESS_GOOGLE_SUPPORT = "IN_PROGRESS_GOOGLE_SUPPORT"
    ACTION_REQUIRED = "ACTION_REQUIRED"
    SOLUTION_PROVIDED = "SOLUTION_PROVIDED"
    CLOSED = "CLOSED"


@dataclass_json
@dataclass
class Case:
    classification: Optional[caseclassification.CaseClassification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[actor.Actor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    escalated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'escalated' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    priority: Optional[CasePriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    severity: Optional[CaseSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    state: Optional[CaseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    subscriber_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriberEmailAddresses' }})
    test_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCase' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
