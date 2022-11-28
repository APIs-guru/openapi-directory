from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceColumn:
    r"""DataSourceColumn
    A column in a data source.
    """
    
    formula: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formula') }})
    reference: Optional[DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    
