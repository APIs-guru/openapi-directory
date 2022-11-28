from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportRow:
    r"""ReportRow
    Result row returned from the search query.
    """
    
    best_sellers: Optional[BestSellers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestSellers') }})
    brand: Optional[Brand] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    metrics: Optional[Metrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    price_competitiveness: Optional[PriceCompetitiveness] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceCompetitiveness') }})
    price_insights: Optional[PriceInsights] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceInsights') }})
    product_cluster: Optional[ProductCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCluster') }})
    product_view: Optional[ProductView] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productView') }})
    segments: Optional[Segments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    
