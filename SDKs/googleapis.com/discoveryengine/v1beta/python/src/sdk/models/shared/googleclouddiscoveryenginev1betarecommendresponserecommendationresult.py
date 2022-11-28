from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult:
    r"""GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult
    RecommendationResult represents a generic recommendation result with associated metadata.
    """
    
    document: Optional[GoogleCloudDiscoveryengineV1betaDocument] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
