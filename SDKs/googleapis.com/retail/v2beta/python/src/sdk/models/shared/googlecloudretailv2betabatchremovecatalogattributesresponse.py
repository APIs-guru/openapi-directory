from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse:
    r"""GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse
    Response of the CatalogService.BatchRemoveCatalogAttributes.
    """
    
    deleted_catalog_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedCatalogAttributes') }})
    reset_catalog_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetCatalogAttributes') }})
    
