from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmCardsTemplatesAplosSeriesListData:
    r"""EnterpriseCrmCardsTemplatesAplosSeriesListData
    Data used for Aplos charts that accept multiple Series.
    """
    
    series: Optional[List[EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    
