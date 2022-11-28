from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1SearchCatalogResponse:
    r"""GoogleCloudDatacatalogV1beta1SearchCatalogResponse
    Response message for SearchCatalog.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    results: Optional[List[GoogleCloudDatacatalogV1beta1SearchCatalogResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
