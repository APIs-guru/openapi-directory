from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy:
    r"""GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy
    MashQuery GroupBy parameters.
    """
    
    fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    reducer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reducer') }})
    
