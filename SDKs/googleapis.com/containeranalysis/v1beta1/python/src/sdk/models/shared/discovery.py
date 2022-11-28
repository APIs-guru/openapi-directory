from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DiscoveryAnalysisKindEnum(str, Enum):
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
class Discovery:
    r"""Discovery
    A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
    """
    
    analysis_kind: Optional[DiscoveryAnalysisKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisKind') }})
    
