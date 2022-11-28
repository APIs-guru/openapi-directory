from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FindingFindingClassEnum(str, Enum):
    FINDING_CLASS_UNSPECIFIED = "FINDING_CLASS_UNSPECIFIED"
    THREAT = "THREAT"
    VULNERABILITY = "VULNERABILITY"
    MISCONFIGURATION = "MISCONFIGURATION"
    OBSERVATION = "OBSERVATION"
    SCC_ERROR = "SCC_ERROR"

class FindingMuteEnum(str, Enum):
    MUTE_UNSPECIFIED = "MUTE_UNSPECIFIED"
    MUTED = "MUTED"
    UNMUTED = "UNMUTED"
    UNDEFINED = "UNDEFINED"

class FindingSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"

class FindingStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class Finding:
    r"""Finding
    Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
    """
    
    access: Optional[Access] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    canonical_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalName') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    compliances: Optional[List[Compliance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliances') }})
    connections: Optional[List[Connection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    contacts: Optional[dict[str, ContactDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    containers: Optional[List[Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database: Optional[Database] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    exfiltration: Optional[Exfiltration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exfiltration') }})
    external_systems: Optional[dict[str, GoogleCloudSecuritycenterV1ExternalSystem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalSystems') }})
    external_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalUri') }})
    files: Optional[List[File]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    finding_class: Optional[FindingFindingClassEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingClass') }})
    iam_bindings: Optional[List[IamBinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamBindings') }})
    indicator: Optional[Indicator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indicator') }})
    kubernetes: Optional[Kubernetes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetes') }})
    mitre_attack: Optional[MitreAttack] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mitreAttack') }})
    mute: Optional[FindingMuteEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute') }})
    mute_initiator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muteInitiator') }})
    mute_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muteUpdateTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_steps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSteps') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    parent_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDisplayName') }})
    processes: Optional[List[Process]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processes') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    security_marks: Optional[SecurityMarks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityMarks') }})
    severity: Optional[FindingSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    source_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProperties') }})
    state: Optional[FindingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    vulnerability: Optional[Vulnerability] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    

@dataclass_json
@dataclass
class FindingInput:
    r"""FindingInput
    Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
    """
    
    access: Optional[Access] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    canonical_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalName') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    compliances: Optional[List[Compliance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliances') }})
    connections: Optional[List[Connection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    containers: Optional[List[Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database: Optional[Database] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    exfiltration: Optional[Exfiltration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exfiltration') }})
    external_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalUri') }})
    files: Optional[List[File]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    finding_class: Optional[FindingFindingClassEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingClass') }})
    iam_bindings: Optional[List[IamBinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamBindings') }})
    indicator: Optional[Indicator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indicator') }})
    kubernetes: Optional[Kubernetes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetes') }})
    mitre_attack: Optional[MitreAttack] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mitreAttack') }})
    mute: Optional[FindingMuteEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute') }})
    mute_initiator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muteInitiator') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_steps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSteps') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    processes: Optional[List[Process]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processes') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    security_marks: Optional[SecurityMarks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityMarks') }})
    severity: Optional[FindingSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    source_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProperties') }})
    state: Optional[FindingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    vulnerability: Optional[Vulnerability] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    
