from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NoteKindEnum(str, Enum):
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
class Note:
    r"""Note
    A type of analysis that can be done for a resource.
    """
    
    attestation: Optional[AttestationNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    build: Optional[BuildNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    compliance: Optional[ComplianceNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployment: Optional[DeploymentNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    discovery: Optional[DiscoveryNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovery') }})
    dsse_attestation: Optional[DsseAttestationNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsseAttestation') }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime') }})
    image: Optional[ImageNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    kind: Optional[NoteKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longDescription') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package: Optional[PackageNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    related_note_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedNoteNames') }})
    related_url: Optional[List[RelatedURL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedUrl') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade: Optional[UpgradeNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgrade') }})
    vulnerability: Optional[VulnerabilityNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    
