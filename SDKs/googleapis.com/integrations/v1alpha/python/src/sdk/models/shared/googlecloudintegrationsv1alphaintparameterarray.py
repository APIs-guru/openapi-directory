from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntParameterArray:
    r"""GoogleCloudIntegrationsV1alphaIntParameterArray
    This message only contains a field of integer array.
    """
    
    int_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValues') }})
    
