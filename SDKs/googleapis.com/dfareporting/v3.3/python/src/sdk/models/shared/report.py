from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportCriteria:
    r"""ReportCriteria
    The report criteria for a report of type \"STANDARD\".
    """
    
    activities: Optional[Activities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    custom_rich_media_events: Optional[CustomRichMediaEvents] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRichMediaEvents') }})
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension_filters: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    dimensions: Optional[List[SortedDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    
class ReportCrossDimensionReachCriteriaDimensionEnum(str, Enum):
    ADVERTISER = "ADVERTISER"
    CAMPAIGN = "CAMPAIGN"
    SITE_BY_ADVERTISER = "SITE_BY_ADVERTISER"
    SITE_BY_CAMPAIGN = "SITE_BY_CAMPAIGN"


@dataclass_json
@dataclass
class ReportCrossDimensionReachCriteria:
    r"""ReportCrossDimensionReachCriteria
    The report criteria for a report of type \"CROSS_DIMENSION_REACH\".
    """
    
    breakdown: Optional[List[SortedDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakdown') }})
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension: Optional[ReportCrossDimensionReachCriteriaDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    dimension_filters: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    overlap_metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlapMetricNames') }})
    pivoted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivoted') }})
    
class ReportDeliveryEmailOwnerDeliveryTypeEnum(str, Enum):
    LINK = "LINK"
    ATTACHMENT = "ATTACHMENT"


@dataclass_json
@dataclass
class ReportDelivery:
    r"""ReportDelivery
    The report's email delivery settings.
    """
    
    email_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailOwner') }})
    email_owner_delivery_type: Optional[ReportDeliveryEmailOwnerDeliveryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailOwnerDeliveryType') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    recipients: Optional[List[Recipient]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    

@dataclass_json
@dataclass
class ReportFloodlightCriteriaReportProperties:
    r"""ReportFloodlightCriteriaReportProperties
    The properties of the report.
    """
    
    include_attributed_ip_conversions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeAttributedIPConversions') }})
    include_unattributed_cookie_conversions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUnattributedCookieConversions') }})
    include_unattributed_ip_conversions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUnattributedIPConversions') }})
    

@dataclass_json
@dataclass
class ReportFloodlightCriteria:
    r"""ReportFloodlightCriteria
    The report criteria for a report of type \"FLOODLIGHT\".
    """
    
    custom_rich_media_events: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRichMediaEvents') }})
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension_filters: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    dimensions: Optional[List[SortedDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    floodlight_config_id: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigId') }})
    metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    report_properties: Optional[ReportFloodlightCriteriaReportProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportProperties') }})
    
class ReportFormatEnum(str, Enum):
    CSV = "CSV"
    EXCEL = "EXCEL"


@dataclass_json
@dataclass
class ReportPathToConversionCriteriaReportProperties:
    r"""ReportPathToConversionCriteriaReportProperties
    The properties of the report.
    """
    
    clicks_lookback_window: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicksLookbackWindow') }})
    impressions_lookback_window: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionsLookbackWindow') }})
    include_attributed_ip_conversions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeAttributedIPConversions') }})
    include_unattributed_cookie_conversions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUnattributedCookieConversions') }})
    include_unattributed_ip_conversions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUnattributedIPConversions') }})
    maximum_click_interactions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumClickInteractions') }})
    maximum_impression_interactions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumImpressionInteractions') }})
    maximum_interaction_gap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumInteractionGap') }})
    pivot_on_interaction_path: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotOnInteractionPath') }})
    

@dataclass_json
@dataclass
class ReportPathToConversionCriteria:
    r"""ReportPathToConversionCriteria
    The report criteria for a report of type \"PATH_TO_CONVERSION\".
    """
    
    activity_filters: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityFilters') }})
    conversion_dimensions: Optional[List[SortedDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionDimensions') }})
    custom_floodlight_variables: Optional[List[SortedDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFloodlightVariables') }})
    custom_rich_media_events: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRichMediaEvents') }})
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    floodlight_config_id: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigId') }})
    metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    per_interaction_dimensions: Optional[List[SortedDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perInteractionDimensions') }})
    report_properties: Optional[ReportPathToConversionCriteriaReportProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportProperties') }})
    

@dataclass_json
@dataclass
class ReportReachCriteria:
    r"""ReportReachCriteria
    The report criteria for a report of type \"REACH\".
    """
    
    activities: Optional[Activities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    custom_rich_media_events: Optional[CustomRichMediaEvents] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRichMediaEvents') }})
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension_filters: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    dimensions: Optional[List[SortedDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    enable_all_dimension_combinations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAllDimensionCombinations') }})
    metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    reach_by_frequency_metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachByFrequencyMetricNames') }})
    
class ReportScheduleRepeatsOnWeekDaysEnum(str, Enum):
    SUNDAY = "SUNDAY"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"

class ReportScheduleRunsOnDayOfMonthEnum(str, Enum):
    DAY_OF_MONTH = "DAY_OF_MONTH"
    WEEK_OF_MONTH = "WEEK_OF_MONTH"


@dataclass_json
@dataclass
class ReportSchedule:
    r"""ReportSchedule
    The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not \"TODAY\".
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    every: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('every') }})
    expiration_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    repeats: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeats') }})
    repeats_on_week_days: Optional[List[ReportScheduleRepeatsOnWeekDaysEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatsOnWeekDays') }})
    runs_on_day_of_month: Optional[ReportScheduleRunsOnDayOfMonthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runsOnDayOfMonth') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class ReportTypeEnum(str, Enum):
    STANDARD = "STANDARD"
    REACH = "REACH"
    PATH_TO_CONVERSION = "PATH_TO_CONVERSION"
    CROSS_DIMENSION_REACH = "CROSS_DIMENSION_REACH"
    FLOODLIGHT = "FLOODLIGHT"


@dataclass_json
@dataclass
class Report:
    r"""Report
    Represents a Report resource.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    criteria: Optional[ReportCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    cross_dimension_reach_criteria: Optional[ReportCrossDimensionReachCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossDimensionReachCriteria') }})
    delivery: Optional[ReportDelivery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    floodlight_criteria: Optional[ReportFloodlightCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightCriteria') }})
    format: Optional[ReportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerProfileId') }})
    path_to_conversion_criteria: Optional[ReportPathToConversionCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathToConversionCriteria') }})
    reach_criteria: Optional[ReportReachCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachCriteria') }})
    schedule: Optional[ReportSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    sub_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountId') }})
    type: Optional[ReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
