package shared

type PageviewsCountsTimeRangeEnum string

const (
	PageviewsCountsTimeRangeEnumAllTime    PageviewsCountsTimeRangeEnum = "ALL_TIME"
	PageviewsCountsTimeRangeEnumThirtyDays PageviewsCountsTimeRangeEnum = "THIRTY_DAYS"
	PageviewsCountsTimeRangeEnumSevenDays  PageviewsCountsTimeRangeEnum = "SEVEN_DAYS"
)

type PageviewsCounts struct {
	Count     *string                       `json:"count"`
	TimeRange *PageviewsCountsTimeRangeEnum `json:"timeRange"`
}

type Pageviews struct {
	BlogID *string           `json:"blogId"`
	Counts []PageviewsCounts `json:"counts"`
	Kind   *string           `json:"kind"`
}
