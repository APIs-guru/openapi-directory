from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authority
from . import basis
from . import build
from . import deployable
from . import discovery
from . import intoto
from . import package
from . import relatedurl
from . import documentnote
from . import filenote
from . import packageinfonote
from . import relationshipnote
from . import vulnerability

class NoteKindEnum(str, Enum):
    NOTE_KIND_UNSPECIFIED = "NOTE_KIND_UNSPECIFIED"
    VULNERABILITY = "VULNERABILITY"
    BUILD = "BUILD"
    IMAGE = "IMAGE"
    PACKAGE = "PACKAGE"
    DEPLOYMENT = "DEPLOYMENT"
    DISCOVERY = "DISCOVERY"
    ATTESTATION = "ATTESTATION"
    INTOTO = "INTOTO"
    SBOM = "SBOM"
    SPDX_PACKAGE = "SPDX_PACKAGE"
    SPDX_FILE = "SPDX_FILE"
    SPDX_RELATIONSHIP = "SPDX_RELATIONSHIP"


@dataclass_json
@dataclass
class Note:
    attestation_authority: Optional[authority.Authority] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestationAuthority' }})
    base_image: Optional[basis.Basis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseImage' }})
    build: Optional[build.Build] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deployable: Optional[deployable.Deployable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployable' }})
    discovery: Optional[discovery.Discovery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discovery' }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationTime' }})
    intoto: Optional[intoto.InToto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intoto' }})
    kind: Optional[NoteKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longDescription' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package: Optional[package.Package] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    related_note_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedNoteNames' }})
    related_url: Optional[List[relatedurl.RelatedURL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedUrl' }})
    sbom: Optional[documentnote.DocumentNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sbom' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    spdx_file: Optional[filenote.FileNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxFile' }})
    spdx_package: Optional[packageinfonote.PackageInfoNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxPackage' }})
    spdx_relationship: Optional[relationshipnote.RelationshipNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxRelationship' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    vulnerability: Optional[vulnerability.Vulnerability] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerability' }})
    
