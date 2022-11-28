from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse:
    r"""GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse
    The response for getting Execution stats.
    """
    
    aplos_series_list_data: Optional[EnterpriseCrmCardsTemplatesAplosSeriesListData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aplosSeriesListData') }})
    table_data: Optional[EnterpriseCrmCardsTabularData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableData') }})
    
