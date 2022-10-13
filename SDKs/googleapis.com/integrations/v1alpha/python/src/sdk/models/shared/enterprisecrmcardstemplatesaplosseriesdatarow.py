from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmcardscellvalue
from . import enterprisecrmcardscellvalue


@dataclass_json
@dataclass
class EnterpriseCrmCardsTemplatesAplosSeriesDataRow:
    x: Optional[enterprisecrmcardscellvalue.EnterpriseCrmCardsCellValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x' }})
    y: Optional[enterprisecrmcardscellvalue.EnterpriseCrmCardsCellValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'y' }})
    
