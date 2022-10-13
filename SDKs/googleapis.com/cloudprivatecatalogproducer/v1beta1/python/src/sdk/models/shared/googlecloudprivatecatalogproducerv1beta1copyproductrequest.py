from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest:
    destination_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationProductName' }})
    
