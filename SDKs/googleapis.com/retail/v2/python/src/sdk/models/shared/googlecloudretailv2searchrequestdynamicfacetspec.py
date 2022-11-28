from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchRequestDynamicFacetSpec:
    r"""GoogleCloudRetailV2SearchRequestDynamicFacetSpec
    The specifications of dynamically generated facets.
    """
    
    mode: Optional[GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    
