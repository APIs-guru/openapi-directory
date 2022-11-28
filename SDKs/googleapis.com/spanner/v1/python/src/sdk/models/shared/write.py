from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Write:
    r"""Write
    Arguments to insert, update, insert_or_update, and replace operations.
    """
    
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    values: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
