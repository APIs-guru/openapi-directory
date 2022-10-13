from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProductLevelConfig:
    ingestion_product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingestionProductType' }})
    merchant_center_product_id_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCenterProductIdField' }})
    
