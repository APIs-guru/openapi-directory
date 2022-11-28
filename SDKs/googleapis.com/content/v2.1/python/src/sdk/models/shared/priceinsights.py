from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PriceInsights:
    r"""PriceInsights
    Price Insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
    """
    
    predicted_clicks_change_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictedClicksChangeFraction') }})
    predicted_conversions_change_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictedConversionsChangeFraction') }})
    predicted_gross_profit_change_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictedGrossProfitChangeFraction') }})
    predicted_impressions_change_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictedImpressionsChangeFraction') }})
    predicted_monthly_gross_profit_change_currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictedMonthlyGrossProfitChangeCurrencyCode') }})
    predicted_monthly_gross_profit_change_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictedMonthlyGrossProfitChangeMicros') }})
    suggested_price_currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedPriceCurrencyCode') }})
    suggested_price_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedPriceMicros') }})
    
