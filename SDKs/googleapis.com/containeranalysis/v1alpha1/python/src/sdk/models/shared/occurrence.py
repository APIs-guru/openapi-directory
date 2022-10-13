from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attestation
from . import builddetails
from . import complianceoccurrence
from . import deployment
from . import derived
from . import discovered
from . import dsseattestationoccurrence
from . import envelope
from . import installation
from . import resource
from . import documentoccurrence
from . import fileoccurrence
from . import packageinfooccurrence
from . import relationshipoccurrence
from . import upgradeoccurrence
from . import vulnerabilitydetails

class OccurrenceKindEnum(str, Enum):
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
class Occurrence:
    attestation: Optional[attestation.Attestation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestation' }})
    build_details: Optional[builddetails.BuildDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildDetails' }})
    compliance: Optional[complianceoccurrence.ComplianceOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deployment: Optional[deployment.Deployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    derived_image: Optional[derived.Derived] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'derivedImage' }})
    discovered: Optional[discovered.Discovered] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discovered' }})
    dsse_attestation: Optional[dsseattestationoccurrence.DsseAttestationOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dsseAttestation' }})
    envelope: Optional[envelope.Envelope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envelope' }})
    installation: Optional[installation.Installation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installation' }})
    kind: Optional[OccurrenceKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    note_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noteName' }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remediation' }})
    resource: Optional[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUrl' }})
    sbom: Optional[documentoccurrence.DocumentOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sbom' }})
    spdx_file: Optional[fileoccurrence.FileOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxFile' }})
    spdx_package: Optional[packageinfooccurrence.PackageInfoOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxPackage' }})
    spdx_relationship: Optional[relationshipoccurrence.RelationshipOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxRelationship' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upgrade: Optional[upgradeoccurrence.UpgradeOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgrade' }})
    vulnerability_details: Optional[vulnerabilitydetails.VulnerabilityDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerabilityDetails' }})
    
