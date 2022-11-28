from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DiscoveryAnalysisKindEnum(str, Enum):
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
class Discovery:
    r"""Discovery
    A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. The occurrence's operation will indicate the status of the analysis. Absence of an occurrence linked to this note for a resource indicates that analysis hasn't started.
    """
    
    analysis_kind: Optional[DiscoveryAnalysisKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisKind') }})
    
