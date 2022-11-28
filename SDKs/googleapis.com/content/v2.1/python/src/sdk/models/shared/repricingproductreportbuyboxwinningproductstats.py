from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepricingProductReportBuyboxWinningProductStats:
    r"""RepricingProductReportBuyboxWinningProductStats
    Stats specific to buybox winning rules for product report.
    """
    
    buybox_wins_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyboxWinsCount') }})
    
