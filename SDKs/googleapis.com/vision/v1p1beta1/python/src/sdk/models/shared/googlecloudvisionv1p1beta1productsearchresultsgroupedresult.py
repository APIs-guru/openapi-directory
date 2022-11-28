from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult:
    r"""GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult
    Information about the products similar to a single product in a query image.
    """
    
    bounding_poly: Optional[GoogleCloudVisionV1p1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    object_annotations: Optional[List[GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectAnnotations') }})
    results: Optional[List[GoogleCloudVisionV1p1beta1ProductSearchResultsResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
