from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TableDisplayOptions:
    r"""TableDisplayOptions
    Table display options that can be reused.
    """
    
    shown_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shownColumns') }})
    
