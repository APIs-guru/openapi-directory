from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmCardsTemplatesAplosSeriesData:
    r"""EnterpriseCrmCardsTemplatesAplosSeriesData
    Data used to render an Aplos Series card.
    """
    
    rows: Optional[List[EnterpriseCrmCardsTemplatesAplosSeriesDataRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
