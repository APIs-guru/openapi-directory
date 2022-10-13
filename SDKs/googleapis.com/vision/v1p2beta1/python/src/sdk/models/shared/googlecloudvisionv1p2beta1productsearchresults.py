from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1productsearchresultsgroupedresult
from . import googlecloudvisionv1p2beta1productsearchresultsresult


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1ProductSearchResults:
    index_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexTime' }})
    product_grouped_results: Optional[List[googlecloudvisionv1p2beta1productsearchresultsgroupedresult.GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productGroupedResults' }})
    results: Optional[List[googlecloudvisionv1p2beta1productsearchresultsresult.GoogleCloudVisionV1p2beta1ProductSearchResultsResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
