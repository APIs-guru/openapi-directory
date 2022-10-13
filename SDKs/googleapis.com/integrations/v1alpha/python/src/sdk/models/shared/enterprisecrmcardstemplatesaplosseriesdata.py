from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmcardstemplatesaplosseriesdatarow


@dataclass_json
@dataclass
class EnterpriseCrmCardsTemplatesAplosSeriesData:
    rows: Optional[List[enterprisecrmcardstemplatesaplosseriesdatarow.EnterpriseCrmCardsTemplatesAplosSeriesDataRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
