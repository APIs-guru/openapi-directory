from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import category
from . import geotaxonomy
from . import pricinginfo


@dataclass_json
@dataclass
class Sku:
    category: Optional[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    geo_taxonomy: Optional[geotaxonomy.GeoTaxonomy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoTaxonomy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pricing_info: Optional[List[pricinginfo.PricingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingInfo' }})
    service_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceProviderName' }})
    service_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRegions' }})
    sku_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuId' }})
    
