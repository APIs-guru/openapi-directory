from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProductLevelConfig:
    r"""GoogleCloudRetailV2betaProductLevelConfig
    Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.
    """
    
    ingestion_product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingestionProductType') }})
    merchant_center_product_id_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantCenterProductIdField') }})
    
