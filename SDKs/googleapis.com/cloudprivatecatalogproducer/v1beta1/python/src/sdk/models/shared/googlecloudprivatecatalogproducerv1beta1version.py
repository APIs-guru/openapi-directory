from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudPrivatecatalogproducerV1beta1Version:
    asset: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    original_asset: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalAsset' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
