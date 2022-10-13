from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1boundingpoly
from . import googlecloudvisionv1p2beta1productsearchresultsobjectannotation
from . import googlecloudvisionv1p2beta1productsearchresultsresult


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult:
    bounding_poly: Optional[googlecloudvisionv1p2beta1boundingpoly.GoogleCloudVisionV1p2beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    object_annotations: Optional[List[googlecloudvisionv1p2beta1productsearchresultsobjectannotation.GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectAnnotations' }})
    results: Optional[List[googlecloudvisionv1p2beta1productsearchresultsresult.GoogleCloudVisionV1p2beta1ProductSearchResultsResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
