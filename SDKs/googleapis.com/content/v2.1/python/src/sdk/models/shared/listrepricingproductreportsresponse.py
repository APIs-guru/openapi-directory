from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRepricingProductReportsResponse:
    r"""ListRepricingProductReportsResponse
    Response message for the ListRepricingProductReports method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    repricing_product_reports: Optional[List[RepricingProductReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingProductReports') }})
    
