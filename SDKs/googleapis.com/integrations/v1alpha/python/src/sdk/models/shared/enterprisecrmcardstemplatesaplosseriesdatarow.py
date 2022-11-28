from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmCardsTemplatesAplosSeriesDataRow:
    r"""EnterpriseCrmCardsTemplatesAplosSeriesDataRow
    Aplos series row is exactly two columns labeled x and y.
    """
    
    x: Optional[EnterpriseCrmCardsCellValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[EnterpriseCrmCardsCellValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    
