from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import reportapicolumnspec
from . import reportapicolumnspec
from . import reportapicolumnspec


@dataclass_json
@dataclass
class ReportRequestFilters:
    column: Optional[reportapicolumnspec.ReportAPIColumnSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    

@dataclass_json
@dataclass
class ReportRequestOrderBy:
    column: Optional[reportapicolumnspec.ReportAPIColumnSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    sort_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class ReportRequestReportScope:
    ad_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adGroupId' }})
    ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    agency_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agencyId' }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignId' }})
    engine_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engineAccountId' }})
    keyword_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywordId' }})
    

@dataclass_json
@dataclass
class ReportRequestTimeRange:
    changed_attributes_since_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changedAttributesSinceTimestamp' }})
    changed_metrics_since_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changedMetricsSinceTimestamp' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    

@dataclass_json
@dataclass
class ReportRequest:
    columns: Optional[List[reportapicolumnspec.ReportAPIColumnSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    download_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadFormat' }})
    filters: Optional[List[ReportRequestFilters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    include_deleted_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeDeletedEntities' }})
    include_removed_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeRemovedEntities' }})
    max_rows_per_file: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRowsPerFile' }})
    order_by: Optional[List[ReportRequestOrderBy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    report_scope: Optional[ReportRequestReportScope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportScope' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportType' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCount' }})
    start_row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startRow' }})
    statistics_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statisticsCurrency' }})
    time_range: Optional[ReportRequestTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    verify_single_time_zone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifySingleTimeZone' }})
    
