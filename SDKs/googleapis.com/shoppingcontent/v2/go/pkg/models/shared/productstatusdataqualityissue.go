package shared

type ProductStatusDataQualityIssue struct {
	Destination        *string `json:"destination"`
	Detail             *string `json:"detail"`
	FetchStatus        *string `json:"fetchStatus"`
	ID                 *string `json:"id"`
	Location           *string `json:"location"`
	Severity           *string `json:"severity"`
	Timestamp          *string `json:"timestamp"`
	ValueOnLandingPage *string `json:"valueOnLandingPage"`
	ValueProvided      *string `json:"valueProvided"`
}
