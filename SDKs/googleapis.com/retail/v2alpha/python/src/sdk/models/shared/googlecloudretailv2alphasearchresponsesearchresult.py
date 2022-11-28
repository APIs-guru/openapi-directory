from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchResponseSearchResult:
    r"""GoogleCloudRetailV2alphaSearchResponseSearchResult
    Represents the search results.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    matching_variant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingVariantCount') }})
    matching_variant_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingVariantFields') }})
    personal_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalLabels') }})
    product: Optional[GoogleCloudRetailV2alphaProduct] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    variant_rollup_values: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantRollupValues') }})
    
