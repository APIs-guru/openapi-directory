from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1FetchReportResultsResponse:
    r"""GoogleCloudChannelV1FetchReportResultsResponse
    Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    report_metadata: Optional[GoogleCloudChannelV1ReportResultsMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportMetadata') }})
    rows: Optional[List[GoogleCloudChannelV1Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
