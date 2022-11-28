from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Occurrence
    An instance of an analysis type that has been found on a resource.
    """
    
    attestation: Optional[AttestationOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    build: Optional[BuildOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    compliance: Optional[ComplianceOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployment: Optional[DeploymentOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    discovery: Optional[DiscoveryOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovery') }})
    dsse_attestation: Optional[DsseAttestationOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsseAttestation') }})
    envelope: Optional[Envelope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envelope') }})
    image: Optional[ImageOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    kind: Optional[OccurrenceKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteName') }})
    package: Optional[PackageOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediation') }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade: Optional[UpgradeOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgrade') }})
    vulnerability: Optional[VulnerabilityOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    
