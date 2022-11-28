from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PriceCompetitiveness:
    r"""PriceCompetitiveness
    Price Competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903
    """
    
    benchmark_price_currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benchmarkPriceCurrencyCode') }})
    benchmark_price_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benchmarkPriceMicros') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    
