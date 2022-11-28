from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaModelServingConfigList:
    r"""GoogleCloudRetailV2betaModelServingConfigList
    Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.
    """
    
    serving_config_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingConfigIds') }})
    
