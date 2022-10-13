from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmcardstemplatesaplosserieslistdata
from . import enterprisecrmcardstabulardata


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse:
    aplos_series_list_data: Optional[enterprisecrmcardstemplatesaplosserieslistdata.EnterpriseCrmCardsTemplatesAplosSeriesListData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aplosSeriesListData' }})
    table_data: Optional[enterprisecrmcardstabulardata.EnterpriseCrmCardsTabularData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableData' }})
    
