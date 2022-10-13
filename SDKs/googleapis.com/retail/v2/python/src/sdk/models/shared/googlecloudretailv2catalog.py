from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2productlevelconfig


@dataclass_json
@dataclass
class GoogleCloudRetailV2Catalog:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_level_config: Optional[googlecloudretailv2productlevelconfig.GoogleCloudRetailV2ProductLevelConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productLevelConfig' }})
    
