from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse
    Results of listing annotation spec set under a project.
    """
    
    annotation_spec_sets: Optional[List[GoogleCloudDatalabelingV1beta1AnnotationSpecSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
