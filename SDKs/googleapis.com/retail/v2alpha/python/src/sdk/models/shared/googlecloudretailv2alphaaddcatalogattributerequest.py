from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphacatalogattribute


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaAddCatalogAttributeRequest:
    catalog_attribute: Optional[googlecloudretailv2alphacatalogattribute.GoogleCloudRetailV2alphaCatalogAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogAttribute' }})
    
