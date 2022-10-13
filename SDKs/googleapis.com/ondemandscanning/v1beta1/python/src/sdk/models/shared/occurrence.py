from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attestationoccurrence
from . import buildoccurrence
from . import complianceoccurrence
from . import deploymentoccurrence
from . import discoveryoccurrence
from . import dsseattestationoccurrence
from . import envelope
from . import imageoccurrence
from . import packageoccurrence
from . import upgradeoccurrence
from . import vulnerabilityoccurrence

class OccurrenceKindEnum(str, Enum):
    NOTE_KIND_UNSPECIFIED = "NOTE_KIND_UNSPECIFIED"
    VULNERABILITY = "VULNERABILITY"
    BUILD = "BUILD"
    IMAGE = "IMAGE"
    PACKAGE = "PACKAGE"
    DEPLOYMENT = "DEPLOYMENT"
    DISCOVERY = "DISCOVERY"
    ATTESTATION = "ATTESTATION"
    UPGRADE = "UPGRADE"
    COMPLIANCE = "COMPLIANCE"
    DSSE_ATTESTATION = "DSSE_ATTESTATION"


@dataclass_json
@dataclass
class Occurrence:
    attestation: Optional[attestationoccurrence.AttestationOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestation' }})
    build: Optional[buildoccurrence.BuildOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    compliance: Optional[complianceoccurrence.ComplianceOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deployment: Optional[deploymentoccurrence.DeploymentOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    discovery: Optional[discoveryoccurrence.DiscoveryOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discovery' }})
    dsse_attestation: Optional[dsseattestationoccurrence.DsseAttestationOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dsseAttestation' }})
    envelope: Optional[envelope.Envelope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envelope' }})
    image: Optional[imageoccurrence.ImageOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    kind: Optional[OccurrenceKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    note_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noteName' }})
    package: Optional[packageoccurrence.PackageOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remediation' }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUri' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upgrade: Optional[upgradeoccurrence.UpgradeOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgrade' }})
    vulnerability: Optional[vulnerabilityoccurrence.VulnerabilityOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerability' }})
    
