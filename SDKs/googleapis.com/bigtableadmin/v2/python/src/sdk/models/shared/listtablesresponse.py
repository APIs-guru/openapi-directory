from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTablesResponse:
    r"""ListTablesResponse
    Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tables: Optional[List[Table]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tables') }})
    
