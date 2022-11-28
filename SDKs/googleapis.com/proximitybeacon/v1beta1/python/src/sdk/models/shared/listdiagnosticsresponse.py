from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDiagnosticsResponse:
    r"""ListDiagnosticsResponse
    Response that contains the requested diagnostics.
    """
    
    diagnostics: Optional[List[Diagnostics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnostics') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
