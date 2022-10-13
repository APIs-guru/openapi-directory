from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attestationnote
from . import buildnote
from . import compliancenote
from . import deploymentnote
from . import discoverynote
from . import dsseattestationnote
from . import imagenote
from . import packagenote
from . import relatedurl
from . import upgradenote
from . import vulnerabilitynote

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
    attestation: Optional[attestationnote.AttestationNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestation' }})
    build: Optional[buildnote.BuildNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    compliance: Optional[compliancenote.ComplianceNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deployment: Optional[deploymentnote.DeploymentNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    discovery: Optional[discoverynote.DiscoveryNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discovery' }})
    dsse_attestation: Optional[dsseattestationnote.DsseAttestationNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dsseAttestation' }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationTime' }})
    image: Optional[imagenote.ImageNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    kind: Optional[NoteKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longDescription' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package: Optional[packagenote.PackageNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    related_note_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedNoteNames' }})
    related_url: Optional[List[relatedurl.RelatedURL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedUrl' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upgrade: Optional[upgradenote.UpgradeNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgrade' }})
    vulnerability: Optional[vulnerabilitynote.VulnerabilityNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerability' }})
    
