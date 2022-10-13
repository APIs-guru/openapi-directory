from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmcardscellvalue


@dataclass_json
@dataclass
class EnterpriseCrmCardsRow:
    cells: Optional[List[enterprisecrmcardscellvalue.EnterpriseCrmCardsCellValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cells' }})
    
