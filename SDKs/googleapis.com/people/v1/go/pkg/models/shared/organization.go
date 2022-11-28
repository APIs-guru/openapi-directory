package shared

// OrganizationInput
// A person's past or current organization. Overlapping date ranges are permitted.
type OrganizationInput struct {
	CostCenter                     *string             `json:"costCenter,omitempty"`
	Current                        *bool               `json:"current,omitempty"`
	Department                     *string             `json:"department,omitempty"`
	Domain                         *string             `json:"domain,omitempty"`
	EndDate                        *Date               `json:"endDate,omitempty"`
	FullTimeEquivalentMillipercent *int32              `json:"fullTimeEquivalentMillipercent,omitempty"`
	JobDescription                 *string             `json:"jobDescription,omitempty"`
	Location                       *string             `json:"location,omitempty"`
	Metadata                       *FieldMetadataInput `json:"metadata,omitempty"`
	Name                           *string             `json:"name,omitempty"`
	PhoneticName                   *string             `json:"phoneticName,omitempty"`
	StartDate                      *Date               `json:"startDate,omitempty"`
	Symbol                         *string             `json:"symbol,omitempty"`
	Title                          *string             `json:"title,omitempty"`
	Type                           *string             `json:"type,omitempty"`
}

// Organization
// A person's past or current organization. Overlapping date ranges are permitted.
type Organization struct {
	CostCenter                     *string        `json:"costCenter,omitempty"`
	Current                        *bool          `json:"current,omitempty"`
	Department                     *string        `json:"department,omitempty"`
	Domain                         *string        `json:"domain,omitempty"`
	EndDate                        *Date          `json:"endDate,omitempty"`
	FormattedType                  *string        `json:"formattedType,omitempty"`
	FullTimeEquivalentMillipercent *int32         `json:"fullTimeEquivalentMillipercent,omitempty"`
	JobDescription                 *string        `json:"jobDescription,omitempty"`
	Location                       *string        `json:"location,omitempty"`
	Metadata                       *FieldMetadata `json:"metadata,omitempty"`
	Name                           *string        `json:"name,omitempty"`
	PhoneticName                   *string        `json:"phoneticName,omitempty"`
	StartDate                      *Date          `json:"startDate,omitempty"`
	Symbol                         *string        `json:"symbol,omitempty"`
	Title                          *string        `json:"title,omitempty"`
	Type                           *string        `json:"type,omitempty"`
}
