from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse:
    r"""GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse
    Response with a list of anomalies in datasets.
    """
    
    anomalies: Optional[List[GooglePlayDeveloperReportingV1alpha1Anomaly]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anomalies') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
