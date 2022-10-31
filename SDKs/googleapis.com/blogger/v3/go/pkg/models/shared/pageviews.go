package shared

type PageviewsCountsTimeRangeEnum string

const (
	PageviewsCountsTimeRangeEnumAllTime    PageviewsCountsTimeRangeEnum = "ALL_TIME"
	PageviewsCountsTimeRangeEnumThirtyDays PageviewsCountsTimeRangeEnum = "THIRTY_DAYS"
	PageviewsCountsTimeRangeEnumSevenDays  PageviewsCountsTimeRangeEnum = "SEVEN_DAYS"
)

type PageviewsCounts struct {
	Count     *string                       `json:"count,omitempty"`
	TimeRange *PageviewsCountsTimeRangeEnum `json:"timeRange,omitempty"`
}

type Pageviews struct {
	BlogID *string           `json:"blogId,omitempty"`
	Counts []PageviewsCounts `json:"counts,omitempty"`
	Kind   *string           `json:"kind,omitempty"`
}
