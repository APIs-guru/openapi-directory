package shared

type Organization struct {
	CostCenter                     *string        `json:"costCenter"`
	Current                        *bool          `json:"current"`
	Department                     *string        `json:"department"`
	Domain                         *string        `json:"domain"`
	EndDate                        *Date          `json:"endDate"`
	FormattedType                  *string        `json:"formattedType"`
	FullTimeEquivalentMillipercent *int32         `json:"fullTimeEquivalentMillipercent"`
	JobDescription                 *string        `json:"jobDescription"`
	Location                       *string        `json:"location"`
	Metadata                       *FieldMetadata `json:"metadata"`
	Name                           *string        `json:"name"`
	PhoneticName                   *string        `json:"phoneticName"`
	StartDate                      *Date          `json:"startDate"`
	Symbol                         *string        `json:"symbol"`
	Title                          *string        `json:"title"`
	Type                           *string        `json:"type"`
}
