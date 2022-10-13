from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacatalogattribute


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaReplaceCatalogAttributeRequest:
    catalog_attribute: Optional[googlecloudretailv2betacatalogattribute.GoogleCloudRetailV2betaCatalogAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogAttribute' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
