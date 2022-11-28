from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse:
    r"""GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
    Response message for ExportTaxonomies.
    """
    
    taxonomies: Optional[List[GoogleCloudDatacatalogV1beta1SerializedTaxonomy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomies') }})
    
