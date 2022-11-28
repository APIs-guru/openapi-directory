from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchResponseFacet:
    r"""GoogleCloudRetailV2betaSearchResponseFacet
    A facet result.
    """
    
    dynamic_facet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicFacet') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[List[GoogleCloudRetailV2betaSearchResponseFacetFacetValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
