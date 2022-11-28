from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ListTaxonomiesResponse:
    r"""GoogleCloudDatacatalogV1ListTaxonomiesResponse
    Response message for ListTaxonomies.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    taxonomies: Optional[List[GoogleCloudDatacatalogV1Taxonomy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomies') }})
    
