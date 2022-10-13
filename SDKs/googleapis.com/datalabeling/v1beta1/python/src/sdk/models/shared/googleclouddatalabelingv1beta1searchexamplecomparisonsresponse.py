from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1examplecomparison


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse:
    example_comparisons: Optional[List[googleclouddatalabelingv1beta1examplecomparison.GoogleCloudDatalabelingV1beta1ExampleComparison]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exampleComparisons' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
