from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdvertiserAndBrand:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserName' }})
    brand_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandId' }})
    brand_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandName' }})
    
