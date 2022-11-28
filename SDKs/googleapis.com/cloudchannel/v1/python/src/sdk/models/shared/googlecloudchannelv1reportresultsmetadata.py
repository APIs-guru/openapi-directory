from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ReportResultsMetadata:
    r"""GoogleCloudChannelV1ReportResultsMetadata
    The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.
    """
    
    date_range: Optional[GoogleCloudChannelV1DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    preceding_date_range: Optional[GoogleCloudChannelV1DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precedingDateRange') }})
    report: Optional[GoogleCloudChannelV1Report] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    
