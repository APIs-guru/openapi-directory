from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaBooleanParameterArray:
    r"""GoogleCloudIntegrationsV1alphaBooleanParameterArray
    This message only contains a field of boolean array.
    """
    
    boolean_values: Optional[List[bool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValues') }})
    
