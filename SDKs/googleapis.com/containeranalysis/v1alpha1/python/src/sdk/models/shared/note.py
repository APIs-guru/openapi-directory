from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attestationauthority
from . import basis
from . import buildtype
from . import compliancenote
from . import deployable
from . import discovery
from . import dsseattestationnote
from . import package
from . import relatedurl
from . import documentnote
from . import filenote
from . import packageinfonote
from . import relationshipnote
from . import upgradenote
from . import vulnerabilitytype

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
    attestation_authority: Optional[attestationauthority.AttestationAuthority] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestationAuthority' }})
    base_image: Optional[basis.Basis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseImage' }})
    build_type: Optional[buildtype.BuildType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildType' }})
    compliance: Optional[compliancenote.ComplianceNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deployable: Optional[deployable.Deployable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployable' }})
    discovery: Optional[discovery.Discovery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discovery' }})
    dsse_attestation: Optional[dsseattestationnote.DsseAttestationNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dsseAttestation' }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationTime' }})
    kind: Optional[NoteKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longDescription' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package: Optional[package.Package] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    related_url: Optional[List[relatedurl.RelatedURL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedUrl' }})
    sbom: Optional[documentnote.DocumentNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sbom' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    spdx_file: Optional[filenote.FileNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxFile' }})
    spdx_package: Optional[packageinfonote.PackageInfoNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxPackage' }})
    spdx_relationship: Optional[relationshipnote.RelationshipNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxRelationship' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upgrade: Optional[upgradenote.UpgradeNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgrade' }})
    vulnerability_type: Optional[vulnerabilitytype.VulnerabilityType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerabilityType' }})
    
