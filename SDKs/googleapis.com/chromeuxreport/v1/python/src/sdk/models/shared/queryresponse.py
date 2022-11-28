from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryResponse:
    r"""QueryResponse
    Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
    """
    
    record: Optional[Record] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    url_normalization_details: Optional[URLNormalization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlNormalizationDetails') }})
    
