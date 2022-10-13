package shared

import (
	"time"
)

type ReportCriteria struct {
	Activities            *Activities            `json:"activities"`
	CustomRichMediaEvents *CustomRichMediaEvents `json:"customRichMediaEvents"`
	DateRange             *DateRange             `json:"dateRange"`
	DimensionFilters      []DimensionValue       `json:"dimensionFilters"`
	Dimensions            []SortedDimension      `json:"dimensions"`
	MetricNames           []string               `json:"metricNames"`
}

type ReportCrossDimensionReachCriteriaDimensionEnum string

const (
	ReportCrossDimensionReachCriteriaDimensionEnumAdvertiser       ReportCrossDimensionReachCriteriaDimensionEnum = "ADVERTISER"
	ReportCrossDimensionReachCriteriaDimensionEnumCampaign         ReportCrossDimensionReachCriteriaDimensionEnum = "CAMPAIGN"
	ReportCrossDimensionReachCriteriaDimensionEnumSiteByAdvertiser ReportCrossDimensionReachCriteriaDimensionEnum = "SITE_BY_ADVERTISER"
	ReportCrossDimensionReachCriteriaDimensionEnumSiteByCampaign   ReportCrossDimensionReachCriteriaDimensionEnum = "SITE_BY_CAMPAIGN"
)

type ReportCrossDimensionReachCriteria struct {
	Breakdown          []SortedDimension                               `json:"breakdown"`
	DateRange          *DateRange                                      `json:"dateRange"`
	Dimension          *ReportCrossDimensionReachCriteriaDimensionEnum `json:"dimension"`
	DimensionFilters   []DimensionValue                                `json:"dimensionFilters"`
	MetricNames        []string                                        `json:"metricNames"`
	OverlapMetricNames []string                                        `json:"overlapMetricNames"`
	Pivoted            *bool                                           `json:"pivoted"`
}

type ReportDeliveryEmailOwnerDeliveryTypeEnum string

const (
	ReportDeliveryEmailOwnerDeliveryTypeEnumLink       ReportDeliveryEmailOwnerDeliveryTypeEnum = "LINK"
	ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment ReportDeliveryEmailOwnerDeliveryTypeEnum = "ATTACHMENT"
)

type ReportDelivery struct {
	EmailOwner             *bool                                     `json:"emailOwner"`
	EmailOwnerDeliveryType *ReportDeliveryEmailOwnerDeliveryTypeEnum `json:"emailOwnerDeliveryType"`
	Message                *string                                   `json:"message"`
	Recipients             []Recipient                               `json:"recipients"`
}

type ReportFloodlightCriteriaReportProperties struct {
	IncludeAttributedIPConversions       *bool `json:"includeAttributedIPConversions"`
	IncludeUnattributedCookieConversions *bool `json:"includeUnattributedCookieConversions"`
	IncludeUnattributedIPConversions     *bool `json:"includeUnattributedIPConversions"`
}

type ReportFloodlightCriteria struct {
	CustomRichMediaEvents []DimensionValue                          `json:"customRichMediaEvents"`
	DateRange             *DateRange                                `json:"dateRange"`
	DimensionFilters      []DimensionValue                          `json:"dimensionFilters"`
	Dimensions            []SortedDimension                         `json:"dimensions"`
	FloodlightConfigID    *DimensionValue                           `json:"floodlightConfigId"`
	MetricNames           []string                                  `json:"metricNames"`
	ReportProperties      *ReportFloodlightCriteriaReportProperties `json:"reportProperties"`
}

type ReportFormatEnum string

const (
	ReportFormatEnumCsv   ReportFormatEnum = "CSV"
	ReportFormatEnumExcel ReportFormatEnum = "EXCEL"
)

type ReportPathToConversionCriteriaReportProperties struct {
	ClicksLookbackWindow                 *int32 `json:"clicksLookbackWindow"`
	ImpressionsLookbackWindow            *int32 `json:"impressionsLookbackWindow"`
	IncludeAttributedIPConversions       *bool  `json:"includeAttributedIPConversions"`
	IncludeUnattributedCookieConversions *bool  `json:"includeUnattributedCookieConversions"`
	IncludeUnattributedIPConversions     *bool  `json:"includeUnattributedIPConversions"`
	MaximumClickInteractions             *int32 `json:"maximumClickInteractions"`
	MaximumImpressionInteractions        *int32 `json:"maximumImpressionInteractions"`
	MaximumInteractionGap                *int32 `json:"maximumInteractionGap"`
	PivotOnInteractionPath               *bool  `json:"pivotOnInteractionPath"`
}

type ReportPathToConversionCriteria struct {
	ActivityFilters           []DimensionValue                                `json:"activityFilters"`
	ConversionDimensions      []SortedDimension                               `json:"conversionDimensions"`
	CustomFloodlightVariables []SortedDimension                               `json:"customFloodlightVariables"`
	CustomRichMediaEvents     []DimensionValue                                `json:"customRichMediaEvents"`
	DateRange                 *DateRange                                      `json:"dateRange"`
	FloodlightConfigID        *DimensionValue                                 `json:"floodlightConfigId"`
	MetricNames               []string                                        `json:"metricNames"`
	PerInteractionDimensions  []SortedDimension                               `json:"perInteractionDimensions"`
	ReportProperties          *ReportPathToConversionCriteriaReportProperties `json:"reportProperties"`
}

type ReportReachCriteria struct {
	Activities                     *Activities            `json:"activities"`
	CustomRichMediaEvents          *CustomRichMediaEvents `json:"customRichMediaEvents"`
	DateRange                      *DateRange             `json:"dateRange"`
	DimensionFilters               []DimensionValue       `json:"dimensionFilters"`
	Dimensions                     []SortedDimension      `json:"dimensions"`
	EnableAllDimensionCombinations *bool                  `json:"enableAllDimensionCombinations"`
	MetricNames                    []string               `json:"metricNames"`
	ReachByFrequencyMetricNames    []string               `json:"reachByFrequencyMetricNames"`
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
	Active            *bool                                 `json:"active"`
	Every             *int32                                `json:"every"`
	ExpirationDate    *time.Time                            `json:"expirationDate"`
	Repeats           *string                               `json:"repeats"`
	RepeatsOnWeekDays []ReportScheduleRepeatsOnWeekDaysEnum `json:"repeatsOnWeekDays"`
	RunsOnDayOfMonth  *ReportScheduleRunsOnDayOfMonthEnum   `json:"runsOnDayOfMonth"`
	StartDate         *time.Time                            `json:"startDate"`
}

type ReportTypeEnum string

const (
	ReportTypeEnumStandard            ReportTypeEnum = "STANDARD"
	ReportTypeEnumReach               ReportTypeEnum = "REACH"
	ReportTypeEnumPathToConversion    ReportTypeEnum = "PATH_TO_CONVERSION"
	ReportTypeEnumCrossDimensionReach ReportTypeEnum = "CROSS_DIMENSION_REACH"
	ReportTypeEnumFloodlight          ReportTypeEnum = "FLOODLIGHT"
)

type Report struct {
	AccountID                   *string                            `json:"accountId"`
	Criteria                    *ReportCriteria                    `json:"criteria"`
	CrossDimensionReachCriteria *ReportCrossDimensionReachCriteria `json:"crossDimensionReachCriteria"`
	Delivery                    *ReportDelivery                    `json:"delivery"`
	Etag                        *string                            `json:"etag"`
	FileName                    *string                            `json:"fileName"`
	FloodlightCriteria          *ReportFloodlightCriteria          `json:"floodlightCriteria"`
	Format                      *ReportFormatEnum                  `json:"format"`
	ID                          *string                            `json:"id"`
	Kind                        *string                            `json:"kind"`
	LastModifiedTime            *string                            `json:"lastModifiedTime"`
	Name                        *string                            `json:"name"`
	OwnerProfileID              *string                            `json:"ownerProfileId"`
	PathToConversionCriteria    *ReportPathToConversionCriteria    `json:"pathToConversionCriteria"`
	ReachCriteria               *ReportReachCriteria               `json:"reachCriteria"`
	Schedule                    *ReportSchedule                    `json:"schedule"`
	SubAccountID                *string                            `json:"subAccountId"`
	Type                        *ReportTypeEnum                    `json:"type"`
}
