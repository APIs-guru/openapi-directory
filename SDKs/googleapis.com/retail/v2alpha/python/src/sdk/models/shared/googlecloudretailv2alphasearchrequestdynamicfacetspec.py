from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec:
    r"""GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec
    The specifications of dynamically generated facets.
    """
    
    mode: Optional[GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    
