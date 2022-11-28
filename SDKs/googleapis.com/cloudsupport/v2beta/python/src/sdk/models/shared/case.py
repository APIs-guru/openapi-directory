from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class CaseInput:
    r"""CaseInput
    A support case.
    """
    
    classification: Optional[CaseClassification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    creator: Optional[ActorInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    escalated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escalated') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    priority: Optional[CasePriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    severity: Optional[CaseSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    subscriber_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriberEmailAddresses') }})
    test_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCase') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    

@dataclass_json
@dataclass
class Case:
    r"""Case
    A support case.
    """
    
    classification: Optional[CaseClassification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[Actor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    escalated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escalated') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    priority: Optional[CasePriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    severity: Optional[CaseSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    state: Optional[CaseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    subscriber_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriberEmailAddresses') }})
    test_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCase') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
