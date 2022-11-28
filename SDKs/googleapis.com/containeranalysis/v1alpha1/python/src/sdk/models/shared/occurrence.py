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
class OccurrenceInput:
    r"""OccurrenceInput
    `Occurrence` includes information about analysis occurrences for an image.
    """
    
    attestation: Optional[Attestation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    build_details: Optional[BuildDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildDetails') }})
    compliance: Optional[ComplianceOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployment: Optional[Deployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    derived_image: Optional[Derived] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivedImage') }})
    discovered: Optional[Discovered] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovered') }})
    dsse_attestation: Optional[DsseAttestationOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsseAttestation') }})
    envelope: Optional[Envelope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envelope') }})
    installation: Optional[InstallationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installation') }})
    kind: Optional[OccurrenceKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteName') }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediation') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUrl') }})
    sbom: Optional[DocumentOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sbom') }})
    spdx_file: Optional[FileOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxFile') }})
    spdx_package: Optional[PackageInfoOccurrenceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxPackage') }})
    spdx_relationship: Optional[RelationshipOccurrenceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxRelationship') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade: Optional[UpgradeOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgrade') }})
    vulnerability_details: Optional[VulnerabilityDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerabilityDetails') }})
    

@dataclass_json
@dataclass
class Occurrence:
    r"""Occurrence
    `Occurrence` includes information about analysis occurrences for an image.
    """
    
    attestation: Optional[Attestation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    build_details: Optional[BuildDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildDetails') }})
    compliance: Optional[ComplianceOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployment: Optional[Deployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    derived_image: Optional[Derived] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivedImage') }})
    discovered: Optional[Discovered] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovered') }})
    dsse_attestation: Optional[DsseAttestationOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsseAttestation') }})
    envelope: Optional[Envelope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envelope') }})
    installation: Optional[Installation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installation') }})
    kind: Optional[OccurrenceKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteName') }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediation') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUrl') }})
    sbom: Optional[DocumentOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sbom') }})
    spdx_file: Optional[FileOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxFile') }})
    spdx_package: Optional[PackageInfoOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxPackage') }})
    spdx_relationship: Optional[RelationshipOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdxRelationship') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade: Optional[UpgradeOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgrade') }})
    vulnerability_details: Optional[VulnerabilityDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerabilityDetails') }})
    
