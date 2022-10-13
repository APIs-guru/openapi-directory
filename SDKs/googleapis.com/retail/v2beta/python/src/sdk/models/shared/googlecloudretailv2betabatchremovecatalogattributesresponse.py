from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse:
    deleted_catalog_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedCatalogAttributes' }})
    reset_catalog_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetCatalogAttributes' }})
    
