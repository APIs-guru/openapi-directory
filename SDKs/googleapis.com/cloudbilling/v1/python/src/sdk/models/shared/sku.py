from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Sku:
    r"""Sku
    Encapsulates a single SKU in Google Cloud Platform
    """
    
    category: Optional[Category] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    geo_taxonomy: Optional[GeoTaxonomy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTaxonomy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pricing_info: Optional[List[PricingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingInfo') }})
    service_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceProviderName') }})
    service_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRegions') }})
    sku_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuId') }})
    
