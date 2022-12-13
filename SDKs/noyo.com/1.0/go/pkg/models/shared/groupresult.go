package shared

type GroupResultBusinessDetailsEmployerTypeEnum string

const (
	GroupResultBusinessDetailsEmployerTypeEnumForeignGovernment GroupResultBusinessDetailsEmployerTypeEnum = "foreign_government"
	GroupResultBusinessDetailsEmployerTypeEnumPrivateSector     GroupResultBusinessDetailsEmployerTypeEnum = "private_sector"
	GroupResultBusinessDetailsEmployerTypeEnumReligiousEmployer GroupResultBusinessDetailsEmployerTypeEnum = "religious_employer"
	GroupResultBusinessDetailsEmployerTypeEnumStateGovernment   GroupResultBusinessDetailsEmployerTypeEnum = "state_government"
	GroupResultBusinessDetailsEmployerTypeEnumTribalGovernment  GroupResultBusinessDetailsEmployerTypeEnum = "tribal_government"
)

type GroupResultBusinessDetailsEntityTypeEnum string

const (
	GroupResultBusinessDetailsEntityTypeEnumCCorp       GroupResultBusinessDetailsEntityTypeEnum = "c_corp"
	GroupResultBusinessDetailsEntityTypeEnumLlc         GroupResultBusinessDetailsEntityTypeEnum = "llc"
	GroupResultBusinessDetailsEntityTypeEnumLlp         GroupResultBusinessDetailsEntityTypeEnum = "llp"
	GroupResultBusinessDetailsEntityTypeEnumPartnership GroupResultBusinessDetailsEntityTypeEnum = "partnership"
	GroupResultBusinessDetailsEntityTypeEnumSCorp       GroupResultBusinessDetailsEntityTypeEnum = "s_corp"
)

// GroupResultBusinessDetails
// Details about business or industry of the group
type GroupResultBusinessDetails struct {
	CompanyDescription *string                                     `json:"company_description,omitempty"`
	DateEstablished    *string                                     `json:"date_established,omitempty"`
	EmployerType       *GroupResultBusinessDetailsEmployerTypeEnum `json:"employer_type,omitempty"`
	EntityType         *GroupResultBusinessDetailsEntityTypeEnum   `json:"entity_type,omitempty"`
}

// GroupResultInsuranceDetails
// General details about the group insurance offerings
type GroupResultInsuranceDetails struct {
	IsErisaCompliant *bool `json:"is_erisa_compliant,omitempty"`
	IsErisaSubject   *bool `json:"is_erisa_subject,omitempty"`
}

type GroupResult struct {
	BusinessDetails  *GroupResultBusinessDetails  `json:"business_details,omitempty"`
	Created          int64                        `json:"created"`
	DbaName          *string                      `json:"dba_name,omitempty"`
	FederalEin       *string                      `json:"federal_ein,omitempty"`
	ID               string                       `json:"id"`
	InsuranceDetails *GroupResultInsuranceDetails `json:"insurance_details,omitempty"`
	Modified         int64                        `json:"modified"`
	Name             string                       `json:"name"`
	OrganizationID   string                       `json:"organization_id"`
	SicCode          *string                      `json:"sic_code,omitempty"`
	Version          string                       `json:"version"`
}
