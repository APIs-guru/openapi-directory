from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import details
from . import grafeasv1beta1builddetails
from . import grafeasv1beta1deploymentdetails
from . import grafeasv1beta1imagedetails
from . import grafeasv1beta1discoverydetails
from . import envelope
from . import grafeasv1beta1packagedetails
from . import grafeasv1beta1intotodetails
from . import resource
from . import documentoccurrence
from . import fileoccurrence
from . import packageinfooccurrence
from . import relationshipoccurrence
from . import grafeasv1beta1vulnerabilitydetails

class OccurrenceKindEnum(str, Enum):
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
class Occurrence:
    attestation: Optional[details.Details] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestation' }})
    build: Optional[grafeasv1beta1builddetails.GrafeasV1beta1BuildDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deployment: Optional[grafeasv1beta1deploymentdetails.GrafeasV1beta1DeploymentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    derived_image: Optional[grafeasv1beta1imagedetails.GrafeasV1beta1ImageDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'derivedImage' }})
    discovered: Optional[grafeasv1beta1discoverydetails.GrafeasV1beta1DiscoveryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discovered' }})
    envelope: Optional[envelope.Envelope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envelope' }})
    installation: Optional[grafeasv1beta1packagedetails.GrafeasV1beta1PackageDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installation' }})
    intoto: Optional[grafeasv1beta1intotodetails.GrafeasV1beta1IntotoDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intoto' }})
    kind: Optional[OccurrenceKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    note_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noteName' }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remediation' }})
    resource: Optional[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    sbom: Optional[documentoccurrence.DocumentOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sbom' }})
    spdx_file: Optional[fileoccurrence.FileOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxFile' }})
    spdx_package: Optional[packageinfooccurrence.PackageInfoOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxPackage' }})
    spdx_relationship: Optional[relationshipoccurrence.RelationshipOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdxRelationship' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    vulnerability: Optional[grafeasv1beta1vulnerabilitydetails.GrafeasV1beta1VulnerabilityDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerability' }})
    
