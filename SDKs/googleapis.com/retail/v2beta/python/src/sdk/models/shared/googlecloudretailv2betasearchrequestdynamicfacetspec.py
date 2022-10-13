from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec:
    mode: Optional[GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
