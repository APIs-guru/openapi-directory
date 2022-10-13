from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2catalogattribute


@dataclass_json
@dataclass
class GoogleCloudRetailV2AddCatalogAttributeRequest:
    catalog_attribute: Optional[googlecloudretailv2catalogattribute.GoogleCloudRetailV2CatalogAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogAttribute' }})
    
