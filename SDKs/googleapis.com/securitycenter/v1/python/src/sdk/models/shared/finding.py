from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import access
from . import compliance
from . import connection
from . import contactdetails
from . import container
from . import database
from . import exfiltration
from . import googlecloudsecuritycenterv1externalsystem
from . import iambinding
from . import indicator
from . import kubernetes
from . import mitreattack
from . import process
from . import securitymarks
from . import vulnerability

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
    access: Optional[access.Access] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    canonical_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalName' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    compliances: Optional[List[compliance.Compliance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliances' }})
    connections: Optional[List[connection.Connection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    contacts: Optional[dict[str, contactdetails.ContactDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    containers: Optional[List[container.Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    database: Optional[database.Database] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime' }})
    exfiltration: Optional[exfiltration.Exfiltration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exfiltration' }})
    external_systems: Optional[dict[str, googlecloudsecuritycenterv1externalsystem.GoogleCloudSecuritycenterV1ExternalSystem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalSystems' }})
    external_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalUri' }})
    finding_class: Optional[FindingFindingClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingClass' }})
    iam_bindings: Optional[List[iambinding.IamBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamBindings' }})
    indicator: Optional[indicator.Indicator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indicator' }})
    kubernetes: Optional[kubernetes.Kubernetes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetes' }})
    mitre_attack: Optional[mitreattack.MitreAttack] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mitreAttack' }})
    mute: Optional[FindingMuteEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mute' }})
    mute_initiator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'muteInitiator' }})
    mute_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'muteUpdateTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_steps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextSteps' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    parent_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentDisplayName' }})
    processes: Optional[List[process.Process]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processes' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    security_marks: Optional[securitymarks.SecurityMarks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityMarks' }})
    severity: Optional[FindingSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    source_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceProperties' }})
    state: Optional[FindingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    vulnerability: Optional[vulnerability.Vulnerability] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerability' }})
    
