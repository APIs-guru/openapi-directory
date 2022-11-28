from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListDatasetsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListDatasetsResponse
    Results of listing datasets within a project.
    """
    
    datasets: Optional[List[GoogleCloudDatalabelingV1beta1Dataset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
