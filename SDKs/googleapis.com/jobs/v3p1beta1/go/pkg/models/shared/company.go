package shared

type CompanySizeEnum string

const (
	CompanySizeEnumCompanySizeUnspecified CompanySizeEnum = "COMPANY_SIZE_UNSPECIFIED"
	CompanySizeEnumMini                   CompanySizeEnum = "MINI"
	CompanySizeEnumSmall                  CompanySizeEnum = "SMALL"
	CompanySizeEnumSmedium                CompanySizeEnum = "SMEDIUM"
	CompanySizeEnumMedium                 CompanySizeEnum = "MEDIUM"
	CompanySizeEnumBig                    CompanySizeEnum = "BIG"
	CompanySizeEnumBigger                 CompanySizeEnum = "BIGGER"
	CompanySizeEnumGiant                  CompanySizeEnum = "GIANT"
)

// Company
// A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
type Company struct {
	CareerSiteURI                        *string             `json:"careerSiteUri,omitempty"`
	DerivedInfo                          *CompanyDerivedInfo `json:"derivedInfo,omitempty"`
	DisplayName                          *string             `json:"displayName,omitempty"`
	EeoText                              *string             `json:"eeoText,omitempty"`
	ExternalID                           *string             `json:"externalId,omitempty"`
	HeadquartersAddress                  *string             `json:"headquartersAddress,omitempty"`
	HiringAgency                         *bool               `json:"hiringAgency,omitempty"`
	ImageURI                             *string             `json:"imageUri,omitempty"`
	KeywordSearchableJobCustomAttributes []string            `json:"keywordSearchableJobCustomAttributes,omitempty"`
	Name                                 *string             `json:"name,omitempty"`
	Size                                 *CompanySizeEnum    `json:"size,omitempty"`
	Suspended                            *bool               `json:"suspended,omitempty"`
	WebsiteURI                           *string             `json:"websiteUri,omitempty"`
}
