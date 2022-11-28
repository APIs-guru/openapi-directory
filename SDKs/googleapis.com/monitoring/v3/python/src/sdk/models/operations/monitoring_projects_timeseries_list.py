from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class MonitoringProjectsTimeSeriesListPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum(str, Enum):
    REDUCE_NONE = "REDUCE_NONE"
    REDUCE_MEAN = "REDUCE_MEAN"
    REDUCE_MIN = "REDUCE_MIN"
    REDUCE_MAX = "REDUCE_MAX"
    REDUCE_SUM = "REDUCE_SUM"
    REDUCE_STDDEV = "REDUCE_STDDEV"
    REDUCE_COUNT = "REDUCE_COUNT"
    REDUCE_COUNT_TRUE = "REDUCE_COUNT_TRUE"
    REDUCE_COUNT_FALSE = "REDUCE_COUNT_FALSE"
    REDUCE_FRACTION_TRUE = "REDUCE_FRACTION_TRUE"
    REDUCE_PERCENTILE_99 = "REDUCE_PERCENTILE_99"
    REDUCE_PERCENTILE_95 = "REDUCE_PERCENTILE_95"
    REDUCE_PERCENTILE_50 = "REDUCE_PERCENTILE_50"
    REDUCE_PERCENTILE_05 = "REDUCE_PERCENTILE_05"

class MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum(str, Enum):
    ALIGN_NONE = "ALIGN_NONE"
    ALIGN_DELTA = "ALIGN_DELTA"
    ALIGN_RATE = "ALIGN_RATE"
    ALIGN_INTERPOLATE = "ALIGN_INTERPOLATE"
    ALIGN_NEXT_OLDER = "ALIGN_NEXT_OLDER"
    ALIGN_MIN = "ALIGN_MIN"
    ALIGN_MAX = "ALIGN_MAX"
    ALIGN_MEAN = "ALIGN_MEAN"
    ALIGN_COUNT = "ALIGN_COUNT"
    ALIGN_SUM = "ALIGN_SUM"
    ALIGN_STDDEV = "ALIGN_STDDEV"
    ALIGN_COUNT_TRUE = "ALIGN_COUNT_TRUE"
    ALIGN_COUNT_FALSE = "ALIGN_COUNT_FALSE"
    ALIGN_FRACTION_TRUE = "ALIGN_FRACTION_TRUE"
    ALIGN_PERCENTILE_99 = "ALIGN_PERCENTILE_99"
    ALIGN_PERCENTILE_95 = "ALIGN_PERCENTILE_95"
    ALIGN_PERCENTILE_50 = "ALIGN_PERCENTILE_50"
    ALIGN_PERCENTILE_05 = "ALIGN_PERCENTILE_05"
    ALIGN_PERCENT_CHANGE = "ALIGN_PERCENT_CHANGE"

class MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum(str, Enum):
    REDUCE_NONE = "REDUCE_NONE"
    REDUCE_MEAN = "REDUCE_MEAN"
    REDUCE_MIN = "REDUCE_MIN"
    REDUCE_MAX = "REDUCE_MAX"
    REDUCE_SUM = "REDUCE_SUM"
    REDUCE_STDDEV = "REDUCE_STDDEV"
    REDUCE_COUNT = "REDUCE_COUNT"
    REDUCE_COUNT_TRUE = "REDUCE_COUNT_TRUE"
    REDUCE_COUNT_FALSE = "REDUCE_COUNT_FALSE"
    REDUCE_FRACTION_TRUE = "REDUCE_FRACTION_TRUE"
    REDUCE_PERCENTILE_99 = "REDUCE_PERCENTILE_99"
    REDUCE_PERCENTILE_95 = "REDUCE_PERCENTILE_95"
    REDUCE_PERCENTILE_50 = "REDUCE_PERCENTILE_50"
    REDUCE_PERCENTILE_05 = "REDUCE_PERCENTILE_05"

class MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum(str, Enum):
    ALIGN_NONE = "ALIGN_NONE"
    ALIGN_DELTA = "ALIGN_DELTA"
    ALIGN_RATE = "ALIGN_RATE"
    ALIGN_INTERPOLATE = "ALIGN_INTERPOLATE"
    ALIGN_NEXT_OLDER = "ALIGN_NEXT_OLDER"
    ALIGN_MIN = "ALIGN_MIN"
    ALIGN_MAX = "ALIGN_MAX"
    ALIGN_MEAN = "ALIGN_MEAN"
    ALIGN_COUNT = "ALIGN_COUNT"
    ALIGN_SUM = "ALIGN_SUM"
    ALIGN_STDDEV = "ALIGN_STDDEV"
    ALIGN_COUNT_TRUE = "ALIGN_COUNT_TRUE"
    ALIGN_COUNT_FALSE = "ALIGN_COUNT_FALSE"
    ALIGN_FRACTION_TRUE = "ALIGN_FRACTION_TRUE"
    ALIGN_PERCENTILE_99 = "ALIGN_PERCENTILE_99"
    ALIGN_PERCENTILE_95 = "ALIGN_PERCENTILE_95"
    ALIGN_PERCENTILE_50 = "ALIGN_PERCENTILE_50"
    ALIGN_PERCENTILE_05 = "ALIGN_PERCENTILE_05"
    ALIGN_PERCENT_CHANGE = "ALIGN_PERCENT_CHANGE"

class MonitoringProjectsTimeSeriesListViewEnum(str, Enum):
    FULL = "FULL"
    HEADERS = "HEADERS"


@dataclass
class MonitoringProjectsTimeSeriesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    aggregation_alignment_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'aggregation.alignmentPeriod', 'style': 'form', 'explode': True }})
    aggregation_cross_series_reducer: Optional[MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'aggregation.crossSeriesReducer', 'style': 'form', 'explode': True }})
    aggregation_group_by_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'aggregation.groupByFields', 'style': 'form', 'explode': True }})
    aggregation_per_series_aligner: Optional[MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'aggregation.perSeriesAligner', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    interval_end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime', 'style': 'form', 'explode': True }})
    interval_start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    secondary_aggregation_alignment_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'secondaryAggregation.alignmentPeriod', 'style': 'form', 'explode': True }})
    secondary_aggregation_cross_series_reducer: Optional[MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'secondaryAggregation.crossSeriesReducer', 'style': 'form', 'explode': True }})
    secondary_aggregation_group_by_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'secondaryAggregation.groupByFields', 'style': 'form', 'explode': True }})
    secondary_aggregation_per_series_aligner: Optional[MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'secondaryAggregation.perSeriesAligner', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[MonitoringProjectsTimeSeriesListViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class MonitoringProjectsTimeSeriesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsTimeSeriesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsTimeSeriesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsTimeSeriesListSecurity:
    option1: Optional[MonitoringProjectsTimeSeriesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MonitoringProjectsTimeSeriesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[MonitoringProjectsTimeSeriesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class MonitoringProjectsTimeSeriesListRequest:
    path_params: MonitoringProjectsTimeSeriesListPathParams = field()
    query_params: MonitoringProjectsTimeSeriesListQueryParams = field()
    security: MonitoringProjectsTimeSeriesListSecurity = field()
    

@dataclass
class MonitoringProjectsTimeSeriesListResponse:
    content_type: str = field()
    status_code: int = field()
    list_time_series_response: Optional[shared.ListTimeSeriesResponse] = field(default=None)
    
