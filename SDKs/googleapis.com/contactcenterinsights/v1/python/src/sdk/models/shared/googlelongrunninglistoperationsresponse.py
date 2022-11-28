from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleLongrunningListOperationsResponse:
    r"""GoogleLongrunningListOperationsResponse
    The response message for Operations.ListOperations.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    operations: Optional[List[GoogleLongrunningOperation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    
