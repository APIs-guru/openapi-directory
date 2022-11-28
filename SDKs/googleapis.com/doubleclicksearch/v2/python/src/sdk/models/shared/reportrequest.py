from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportRequestFilters:
    column: Optional[ReportAPIColumnSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclass
class ReportRequestOrderBy:
    column: Optional[ReportAPIColumnSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    sort_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclass
class ReportRequestReportScope:
    r"""ReportRequestReportScope
    The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
    """
    
    ad_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adGroupId') }})
    ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adId') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    agency_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agencyId') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    engine_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engineAccountId') }})
    keyword_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordId') }})
    

@dataclass_json
@dataclass
class ReportRequestTimeRange:
    r"""ReportRequestTimeRange
    If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
    """
    
    changed_attributes_since_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changedAttributesSinceTimestamp') }})
    changed_metrics_since_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changedMetricsSinceTimestamp') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    

@dataclass_json
@dataclass
class ReportRequest:
    r"""ReportRequest
    A request object used to create a DoubleClick Search report.
    """
    
    columns: Optional[List[ReportAPIColumnSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    download_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadFormat') }})
    filters: Optional[List[ReportRequestFilters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    include_deleted_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeDeletedEntities') }})
    include_removed_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeRemovedEntities') }})
    max_rows_per_file: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRowsPerFile') }})
    order_by: Optional[List[ReportRequestOrderBy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    report_scope: Optional[ReportRequestReportScope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportScope') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    start_row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startRow') }})
    statistics_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statisticsCurrency') }})
    time_range: Optional[ReportRequestTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    verify_single_time_zone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifySingleTimeZone') }})
    
