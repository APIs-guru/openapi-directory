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
    INTOTO = "INTOTO"
    SBOM = "SBOM"
    SPDX_PACKAGE = "SPDX_PACKAGE"
    SPDX_FILE = "SPDX_FILE"
    SPDX_RELATIONSHIP = "SPDX_RELATIONSHIP"


@dataclass_json
@dataclass
class Note:
    r"""Note
    A type of analysis that can be done for a resource.
    """
    
    attestation_authority: Optional[Authority] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestationAuthority') }})
    base_image: Optional[Basis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseImage') }})
    build: Optional[Build] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployable: Optional[Deployable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployable') }})
    discovery: Optional[Discovery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovery') }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime') }})
    intoto: Optional[InToto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intoto') }})
    kind: Optional[NoteKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longDescription') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package: Optional[Package] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    related_note_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedNoteNames') }})
    related_url: Optional[List[RelatedURL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedUrl') }})
    sbom: Optional[DocumentNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sbom') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    spdx_file: Optional[FileNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxFile') }})
    spdx_package: Optional[PackageInfoNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxPackage') }})
    spdx_relationship: Optional[RelationshipNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxRelationship') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vulnerability: Optional[Vulnerability] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    
