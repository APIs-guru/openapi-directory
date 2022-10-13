from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmcardstemplatesaplosseriesdata


@dataclass_json
@dataclass
class EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries:
    data: Optional[enterprisecrmcardstemplatesaplosseriesdata.EnterpriseCrmCardsTemplatesAplosSeriesData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
