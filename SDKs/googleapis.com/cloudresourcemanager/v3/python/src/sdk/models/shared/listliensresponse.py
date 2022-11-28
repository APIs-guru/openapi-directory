from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListLiensResponse:
    r"""ListLiensResponse
    The response message for Liens.ListLiens.
    """
    
    liens: Optional[List[Lien]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liens') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
