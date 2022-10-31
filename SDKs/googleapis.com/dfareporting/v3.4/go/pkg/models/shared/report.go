package shared

import (
	"time"
)

type ReportCriteria struct {
	Activities            *Activities            `json:"activities,omitempty"`
	CustomRichMediaEvents *CustomRichMediaEvents `json:"customRichMediaEvents,omitempty"`
	DateRange             *DateRange             `json:"dateRange,omitempty"`
	DimensionFilters      []DimensionValue       `json:"dimensionFilters,omitempty"`
	Dimensions            []SortedDimension      `json:"dimensions,omitempty"`
	MetricNames           []string               `json:"metricNames,omitempty"`
}

type ReportCrossDimensionReachCriteriaDimensionEnum string

const (
	ReportCrossDimensionReachCriteriaDimensionEnumAdvertiser       ReportCrossDimensionReachCriteriaDimensionEnum = "ADVERTISER"
	ReportCrossDimensionReachCriteriaDimensionEnumCampaign         ReportCrossDimensionReachCriteriaDimensionEnum = "CAMPAIGN"
	ReportCrossDimensionReachCriteriaDimensionEnumSiteByAdvertiser ReportCrossDimensionReachCriteriaDimensionEnum = "SITE_BY_ADVERTISER"
	ReportCrossDimensionReachCriteriaDimensionEnumSiteByCampaign   ReportCrossDimensionReachCriteriaDimensionEnum = "SITE_BY_CAMPAIGN"
)

type ReportCrossDimensionReachCriteria struct {
	Breakdown          []SortedDimension                               `json:"breakdown,omitempty"`
	DateRange          *DateRange                                      `json:"dateRange,omitempty"`
	Dimension          *ReportCrossDimensionReachCriteriaDimensionEnum `json:"dimension,omitempty"`
	DimensionFilters   []DimensionValue                                `json:"dimensionFilters,omitempty"`
	MetricNames        []string                                        `json:"metricNames,omitempty"`
	OverlapMetricNames []string                                        `json:"overlapMetricNames,omitempty"`
	Pivoted            *bool                                           `json:"pivoted,omitempty"`
}

type ReportDeliveryEmailOwnerDeliveryTypeEnum string

const (
	ReportDeliveryEmailOwnerDeliveryTypeEnumLink       ReportDeliveryEmailOwnerDeliveryTypeEnum = "LINK"
	ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment ReportDeliveryEmailOwnerDeliveryTypeEnum = "ATTACHMENT"
)

type ReportDelivery struct {
	EmailOwner             *bool                                     `json:"emailOwner,omitempty"`
	EmailOwnerDeliveryType *ReportDeliveryEmailOwnerDeliveryTypeEnum `json:"emailOwnerDeliveryType,omitempty"`
	Message                *string                                   `json:"message,omitempty"`
	Recipients             []Recipient                               `json:"recipients,omitempty"`
}

type ReportFloodlightCriteriaReportProperties struct {
	IncludeAttributedIPConversions       *bool `json:"includeAttributedIPConversions,omitempty"`
	IncludeUnattributedCookieConversions *bool `json:"includeUnattributedCookieConversions,omitempty"`
	IncludeUnattributedIPConversions     *bool `json:"includeUnattributedIPConversions,omitempty"`
}

type ReportFloodlightCriteria struct {
	CustomRichMediaEvents []DimensionValue                          `json:"customRichMediaEvents,omitempty"`
	DateRange             *DateRange                                `json:"dateRange,omitempty"`
	DimensionFilters      []DimensionValue                          `json:"dimensionFilters,omitempty"`
	Dimensions            []SortedDimension                         `json:"dimensions,omitempty"`
	FloodlightConfigID    *DimensionValue                           `json:"floodlightConfigId,omitempty"`
	MetricNames           []string                                  `json:"metricNames,omitempty"`
	ReportProperties      *ReportFloodlightCriteriaReportProperties `json:"reportProperties,omitempty"`
}

type ReportFormatEnum string

const (
	ReportFormatEnumCsv   ReportFormatEnum = "CSV"
	ReportFormatEnumExcel ReportFormatEnum = "EXCEL"
)

type ReportPathAttributionCriteria struct {
	ActivityFilters       []DimensionValue  `json:"activityFilters,omitempty"`
	CustomChannelGrouping *ChannelGrouping  `json:"customChannelGrouping,omitempty"`
	DateRange             *DateRange        `json:"dateRange,omitempty"`
	Dimensions            []SortedDimension `json:"dimensions,omitempty"`
	FloodlightConfigID    *DimensionValue   `json:"floodlightConfigId,omitempty"`
	MetricNames           []string          `json:"metricNames,omitempty"`
	PathFilters           []PathFilter      `json:"pathFilters,omitempty"`
}

type ReportPathCriteria struct {
	ActivityFilters       []DimensionValue  `json:"activityFilters,omitempty"`
	CustomChannelGrouping *ChannelGrouping  `json:"customChannelGrouping,omitempty"`
	DateRange             *DateRange        `json:"dateRange,omitempty"`
	Dimensions            []SortedDimension `json:"dimensions,omitempty"`
	FloodlightConfigID    *DimensionValue   `json:"floodlightConfigId,omitempty"`
	MetricNames           []string          `json:"metricNames,omitempty"`
	PathFilters           []PathFilter      `json:"pathFilters,omitempty"`
}

type ReportPathToConversionCriteriaReportProperties struct {
	ClicksLookbackWindow                 *int32 `json:"clicksLookbackWindow,omitempty"`
	ImpressionsLookbackWindow            *int32 `json:"impressionsLookbackWindow,omitempty"`
	IncludeAttributedIPConversions       *bool  `json:"includeAttributedIPConversions,omitempty"`
	IncludeUnattributedCookieConversions *bool  `json:"includeUnattributedCookieConversions,omitempty"`
	IncludeUnattributedIPConversions     *bool  `json:"includeUnattributedIPConversions,omitempty"`
	MaximumClickInteractions             *int32 `json:"maximumClickInteractions,omitempty"`
	MaximumImpressionInteractions        *int32 `json:"maximumImpressionInteractions,omitempty"`
	MaximumInteractionGap                *int32 `json:"maximumInteractionGap,omitempty"`
	PivotOnInteractionPath               *bool  `json:"pivotOnInteractionPath,omitempty"`
}

type ReportPathToConversionCriteria struct {
	ActivityFilters           []DimensionValue                                `json:"activityFilters,omitempty"`
	ConversionDimensions      []SortedDimension                               `json:"conversionDimensions,omitempty"`
	CustomFloodlightVariables []SortedDimension                               `json:"customFloodlightVariables,omitempty"`
	CustomRichMediaEvents     []DimensionValue                                `json:"customRichMediaEvents,omitempty"`
	DateRange                 *DateRange                                      `json:"dateRange,omitempty"`
	FloodlightConfigID        *DimensionValue                                 `json:"floodlightConfigId,omitempty"`
	MetricNames               []string                                        `json:"metricNames,omitempty"`
	PerInteractionDimensions  []SortedDimension                               `json:"perInteractionDimensions,omitempty"`
	ReportProperties          *ReportPathToConversionCriteriaReportProperties `json:"reportProperties,omitempty"`
}

type ReportReachCriteria struct {
	Activities                     *Activities            `json:"activities,omitempty"`
	CustomRichMediaEvents          *CustomRichMediaEvents `json:"customRichMediaEvents,omitempty"`
	DateRange                      *DateRange             `json:"dateRange,omitempty"`
	DimensionFilters               []DimensionValue       `json:"dimensionFilters,omitempty"`
	Dimensions                     []SortedDimension      `json:"dimensions,omitempty"`
	EnableAllDimensionCombinations *bool                  `json:"enableAllDimensionCombinations,omitempty"`
	MetricNames                    []string               `json:"metricNames,omitempty"`
	ReachByFrequencyMetricNames    []string               `json:"reachByFrequencyMetricNames,omitempty"`
}

type ReportScheduleRepeatsOnWeekDaysEnum string

const (
	ReportScheduleRepeatsOnWeekDaysEnumSunday    ReportScheduleRepeatsOnWeekDaysEnum = "SUNDAY"
	ReportScheduleRepeatsOnWeekDaysEnumMonday    ReportScheduleRepeatsOnWeekDaysEnum = "MONDAY"
	ReportScheduleRepeatsOnWeekDaysEnumTuesday   ReportScheduleRepeatsOnWeekDaysEnum = "TUESDAY"
	ReportScheduleRepeatsOnWeekDaysEnumWednesday ReportScheduleRepeatsOnWeekDaysEnum = "WEDNESDAY"
	ReportScheduleRepeatsOnWeekDaysEnumThursday  ReportScheduleRepeatsOnWeekDaysEnum = "THURSDAY"
	ReportScheduleRepeatsOnWeekDaysEnumFriday    ReportScheduleRepeatsOnWeekDaysEnum = "FRIDAY"
	ReportScheduleRepeatsOnWeekDaysEnumSaturday  ReportScheduleRepeatsOnWeekDaysEnum = "SATURDAY"
)

type ReportScheduleRunsOnDayOfMonthEnum string

const (
	ReportScheduleRunsOnDayOfMonthEnumDayOfMonth  ReportScheduleRunsOnDayOfMonthEnum = "DAY_OF_MONTH"
	ReportScheduleRunsOnDayOfMonthEnumWeekOfMonth ReportScheduleRunsOnDayOfMonthEnum = "WEEK_OF_MONTH"
)

type ReportSchedule struct {
	Active            *bool                                 `json:"active,omitempty"`
	Every             *int32                                `json:"every,omitempty"`
	ExpirationDate    *time.Time                            `json:"expirationDate,omitempty"`
	Repeats           *string                               `json:"repeats,omitempty"`
	RepeatsOnWeekDays []ReportScheduleRepeatsOnWeekDaysEnum `json:"repeatsOnWeekDays,omitempty"`
	RunsOnDayOfMonth  *ReportScheduleRunsOnDayOfMonthEnum   `json:"runsOnDayOfMonth,omitempty"`
	StartDate         *time.Time                            `json:"startDate,omitempty"`
}

type ReportTypeEnum string

const (
	ReportTypeEnumStandard            ReportTypeEnum = "STANDARD"
	ReportTypeEnumReach               ReportTypeEnum = "REACH"
	ReportTypeEnumPathToConversion    ReportTypeEnum = "PATH_TO_CONVERSION"
	ReportTypeEnumCrossDimensionReach ReportTypeEnum = "CROSS_DIMENSION_REACH"
	ReportTypeEnumFloodlight          ReportTypeEnum = "FLOODLIGHT"
	ReportTypeEnumPath                ReportTypeEnum = "PATH"
	ReportTypeEnumPathAttribution     ReportTypeEnum = "PATH_ATTRIBUTION"
)

type Report struct {
	AccountID                   *string                            `json:"accountId,omitempty"`
	Criteria                    *ReportCriteria                    `json:"criteria,omitempty"`
	CrossDimensionReachCriteria *ReportCrossDimensionReachCriteria `json:"crossDimensionReachCriteria,omitempty"`
	Delivery                    *ReportDelivery                    `json:"delivery,omitempty"`
	Etag                        *string                            `json:"etag,omitempty"`
	FileName                    *string                            `json:"fileName,omitempty"`
	FloodlightCriteria          *ReportFloodlightCriteria          `json:"floodlightCriteria,omitempty"`
	Format                      *ReportFormatEnum                  `json:"format,omitempty"`
	ID                          *string                            `json:"id,omitempty"`
	Kind                        *string                            `json:"kind,omitempty"`
	LastModifiedTime            *string                            `json:"lastModifiedTime,omitempty"`
	Name                        *string                            `json:"name,omitempty"`
	OwnerProfileID              *string                            `json:"ownerProfileId,omitempty"`
	PathAttributionCriteria     *ReportPathAttributionCriteria     `json:"pathAttributionCriteria,omitempty"`
	PathCriteria                *ReportPathCriteria                `json:"pathCriteria,omitempty"`
	PathToConversionCriteria    *ReportPathToConversionCriteria    `json:"pathToConversionCriteria,omitempty"`
	ReachCriteria               *ReportReachCriteria               `json:"reachCriteria,omitempty"`
	Schedule                    *ReportSchedule                    `json:"schedule,omitempty"`
	SubAccountID                *string                            `json:"subAccountId,omitempty"`
	Type                        *ReportTypeEnum                    `json:"type,omitempty"`
}
