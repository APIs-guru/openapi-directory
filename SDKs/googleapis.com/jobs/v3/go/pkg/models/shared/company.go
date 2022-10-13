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

type Company struct {
	CareerSiteURI                        *string             `json:"careerSiteUri"`
	DerivedInfo                          *CompanyDerivedInfo `json:"derivedInfo"`
	DisplayName                          *string             `json:"displayName"`
	EeoText                              *string             `json:"eeoText"`
	ExternalID                           *string             `json:"externalId"`
	HeadquartersAddress                  *string             `json:"headquartersAddress"`
	HiringAgency                         *bool               `json:"hiringAgency"`
	ImageURI                             *string             `json:"imageUri"`
	KeywordSearchableJobCustomAttributes []string            `json:"keywordSearchableJobCustomAttributes"`
	Name                                 *string             `json:"name"`
	Size                                 *CompanySizeEnum    `json:"size"`
	Suspended                            *bool               `json:"suspended"`
	WebsiteURI                           *string             `json:"websiteUri"`
}
