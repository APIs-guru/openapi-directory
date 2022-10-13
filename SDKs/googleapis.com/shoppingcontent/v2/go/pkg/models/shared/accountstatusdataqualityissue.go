package shared

type AccountStatusDataQualityIssue struct {
	Country        *string                    `json:"country"`
	Destination    *string                    `json:"destination"`
	Detail         *string                    `json:"detail"`
	DisplayedValue *string                    `json:"displayedValue"`
	ExampleItems   []AccountStatusExampleItem `json:"exampleItems"`
	ID             *string                    `json:"id"`
	LastChecked    *string                    `json:"lastChecked"`
	Location       *string                    `json:"location"`
	NumItems       *int64                     `json:"numItems"`
	Severity       *string                    `json:"severity"`
	SubmittedValue *string                    `json:"submittedValue"`
}
