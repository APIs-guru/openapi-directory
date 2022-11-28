from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConditionIamEnum(str, Enum):
    NO_ATTR = "NO_ATTR"
    AUTHORITY = "AUTHORITY"
    ATTRIBUTION = "ATTRIBUTION"
    SECURITY_REALM = "SECURITY_REALM"
    APPROVER = "APPROVER"
    JUSTIFICATION_TYPE = "JUSTIFICATION_TYPE"
    CREDENTIALS_TYPE = "CREDENTIALS_TYPE"
    CREDS_ASSERTION = "CREDS_ASSERTION"

class ConditionOpEnum(str, Enum):
    NO_OP = "NO_OP"
    EQUALS = "EQUALS"
    NOT_EQUALS = "NOT_EQUALS"
    IN = "IN"
    NOT_IN = "NOT_IN"
    DISCHARGED = "DISCHARGED"

class ConditionSysEnum(str, Enum):
    NO_ATTR = "NO_ATTR"
    REGION = "REGION"
    SERVICE = "SERVICE"
    NAME = "NAME"
    IP = "IP"


@dataclass_json
@dataclass
class Condition:
    r"""Condition
    A condition to be met.
    """
    
    iam: Optional[ConditionIamEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iam') }})
    op: Optional[ConditionOpEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    svc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('svc') }})
    sys: Optional[ConditionSysEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sys') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
