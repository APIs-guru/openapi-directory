from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceRestriction:
    r"""DataSourceRestriction
    Restriction on Datasource.
    """
    
    filter_options: Optional[List[FilterOptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterOptions') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
