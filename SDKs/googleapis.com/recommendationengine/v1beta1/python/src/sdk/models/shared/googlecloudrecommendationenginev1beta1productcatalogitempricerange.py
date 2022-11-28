from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange:
    r"""GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange
    Product price range when there are a range of prices for different variations of the same product.
    """
    
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    
