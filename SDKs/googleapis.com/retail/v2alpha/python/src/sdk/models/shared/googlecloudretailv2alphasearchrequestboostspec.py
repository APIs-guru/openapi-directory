from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchRequestBoostSpec:
    r"""GoogleCloudRetailV2alphaSearchRequestBoostSpec
    Boost specification to boost certain items.
    """
    
    condition_boost_specs: Optional[List[GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionBoostSpecs') }})
    skip_boost_spec_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipBoostSpecValidation') }})
    
