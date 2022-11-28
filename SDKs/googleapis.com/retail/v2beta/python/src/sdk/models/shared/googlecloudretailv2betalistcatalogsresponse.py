from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaListCatalogsResponse:
    r"""GoogleCloudRetailV2betaListCatalogsResponse
    Response for CatalogService.ListCatalogs method.
    """
    
    catalogs: Optional[List[GoogleCloudRetailV2betaCatalog]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
