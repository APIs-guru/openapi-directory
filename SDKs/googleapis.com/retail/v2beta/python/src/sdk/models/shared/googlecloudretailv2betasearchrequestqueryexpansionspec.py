from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum(str, Enum):
    CONDITION_UNSPECIFIED = "CONDITION_UNSPECIFIED"
    DISABLED = "DISABLED"
    AUTO = "AUTO"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec:
    r"""GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec
    Specification to determine under which conditions query expansion should occur.
    """
    
    condition: Optional[GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    pin_unexpanded_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinUnexpandedResults') }})
    
