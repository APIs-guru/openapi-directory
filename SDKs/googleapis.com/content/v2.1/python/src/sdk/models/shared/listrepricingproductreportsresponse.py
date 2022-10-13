from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repricingproductreport


@dataclass_json
@dataclass
class ListRepricingProductReportsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    repricing_product_reports: Optional[List[repricingproductreport.RepricingProductReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repricingProductReports' }})
    
