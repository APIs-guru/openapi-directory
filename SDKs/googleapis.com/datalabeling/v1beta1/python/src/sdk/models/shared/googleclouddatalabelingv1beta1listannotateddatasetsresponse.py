from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse
    Results of listing annotated datasets for a dataset.
    """
    
    annotated_datasets: Optional[List[GoogleCloudDatalabelingV1beta1AnnotatedDataset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotatedDatasets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
