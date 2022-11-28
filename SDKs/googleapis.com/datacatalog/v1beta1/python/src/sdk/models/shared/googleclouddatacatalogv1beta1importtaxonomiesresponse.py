from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse:
    r"""GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
    Response message for ImportTaxonomies.
    """
    
    taxonomies: Optional[List[GoogleCloudDatacatalogV1beta1Taxonomy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomies') }})
    
