from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetDiscoverySpecJSONOptions:
    r"""GoogleCloudDataplexV1AssetDiscoverySpecJSONOptions
    Describe JSON data format.
    """
    
    disable_type_inference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTypeInference') }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    
