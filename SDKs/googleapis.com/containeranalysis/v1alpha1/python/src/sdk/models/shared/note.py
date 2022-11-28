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
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    PACKAGE_VULNERABILITY = "PACKAGE_VULNERABILITY"
    BUILD_DETAILS = "BUILD_DETAILS"
    IMAGE_BASIS = "IMAGE_BASIS"
    PACKAGE_MANAGER = "PACKAGE_MANAGER"
    DEPLOYABLE = "DEPLOYABLE"
    DISCOVERY = "DISCOVERY"
    ATTESTATION_AUTHORITY = "ATTESTATION_AUTHORITY"
    UPGRADE = "UPGRADE"
    COMPLIANCE = "COMPLIANCE"
    SBOM = "SBOM"
    SPDX_PACKAGE = "SPDX_PACKAGE"
    SPDX_FILE = "SPDX_FILE"
    SPDX_RELATIONSHIP = "SPDX_RELATIONSHIP"
    DSSE_ATTESTATION = "DSSE_ATTESTATION"


@dataclass_json
@dataclass
class Note:
    r"""Note
    Provides a detailed description of a `Note`.
    """
    
    attestation_authority: Optional[AttestationAuthority] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestationAuthority') }})
    base_image: Optional[Basis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseImage') }})
    build_type: Optional[BuildType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildType') }})
    compliance: Optional[ComplianceNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployable: Optional[Deployable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployable') }})
    discovery: Optional[Discovery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovery') }})
    dsse_attestation: Optional[DsseAttestationNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsseAttestation') }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime') }})
    kind: Optional[NoteKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longDescription') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package: Optional[Package] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    related_url: Optional[List[RelatedURL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedUrl') }})
    sbom: Optional[DocumentNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sbom') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    spdx_file: Optional[FileNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxFile') }})
    spdx_package: Optional[PackageInfoNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxPackage') }})
    spdx_relationship: Optional[RelationshipNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxRelationship') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade: Optional[UpgradeNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgrade') }})
    vulnerability_type: Optional[VulnerabilityType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerabilityType') }})
    
