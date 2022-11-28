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
    INTOTO = "INTOTO"
    SBOM = "SBOM"
    SPDX_PACKAGE = "SPDX_PACKAGE"
    SPDX_FILE = "SPDX_FILE"
    SPDX_RELATIONSHIP = "SPDX_RELATIONSHIP"


@dataclass_json
@dataclass
class Occurrence:
    r"""Occurrence
    An instance of an analysis type that has been found on a resource.
    """
    
    attestation: Optional[Details] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    build: Optional[GrafeasV1beta1BuildDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployment: Optional[GrafeasV1beta1DeploymentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    derived_image: Optional[GrafeasV1beta1ImageDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivedImage') }})
    discovered: Optional[GrafeasV1beta1DiscoveryDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovered') }})
    envelope: Optional[Envelope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envelope') }})
    installation: Optional[GrafeasV1beta1PackageDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installation') }})
    intoto: Optional[GrafeasV1beta1IntotoDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intoto') }})
    kind: Optional[OccurrenceKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteName') }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediation') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    sbom: Optional[DocumentOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sbom') }})
    spdx_file: Optional[FileOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxFile') }})
    spdx_package: Optional[PackageInfoOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxPackage') }})
    spdx_relationship: Optional[RelationshipOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxRelationship') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vulnerability: Optional[GrafeasV1beta1VulnerabilityDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    

@dataclass_json
@dataclass
class OccurrenceInput:
    r"""OccurrenceInput
    An instance of an analysis type that has been found on a resource.
    """
    
    attestation: Optional[Details] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    build: Optional[GrafeasV1beta1BuildDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployment: Optional[GrafeasV1beta1DeploymentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    derived_image: Optional[GrafeasV1beta1ImageDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivedImage') }})
    discovered: Optional[GrafeasV1beta1DiscoveryDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovered') }})
    envelope: Optional[Envelope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envelope') }})
    installation: Optional[GrafeasV1beta1PackageDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installation') }})
    intoto: Optional[GrafeasV1beta1IntotoDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intoto') }})
    kind: Optional[OccurrenceKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteName') }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediation') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    sbom: Optional[DocumentOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sbom') }})
    spdx_file: Optional[FileOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxFile') }})
    spdx_package: Optional[PackageInfoOccurrenceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxPackage') }})
    spdx_relationship: Optional[RelationshipOccurrenceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxRelationship') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vulnerability: Optional[GrafeasV1beta1VulnerabilityDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    
