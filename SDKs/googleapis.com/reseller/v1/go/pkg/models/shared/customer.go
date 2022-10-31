package shared

type CustomerCustomerTypeEnum string

const (
	CustomerCustomerTypeEnumCustomerTypeUnspecified CustomerCustomerTypeEnum = "customerTypeUnspecified"
	CustomerCustomerTypeEnumDomain                  CustomerCustomerTypeEnum = "domain"
	CustomerCustomerTypeEnumTeam                    CustomerCustomerTypeEnum = "team"
)

type Customer struct {
	AlternateEmail         *string                   `json:"alternateEmail,omitempty"`
	CustomerDomain         *string                   `json:"customerDomain,omitempty"`
	CustomerDomainVerified *bool                     `json:"customerDomainVerified,omitempty"`
	CustomerID             *string                   `json:"customerId,omitempty"`
	CustomerType           *CustomerCustomerTypeEnum `json:"customerType,omitempty"`
	Kind                   *string                   `json:"kind,omitempty"`
	PhoneNumber            *string                   `json:"phoneNumber,omitempty"`
	PostalAddress          *Address                  `json:"postalAddress,omitempty"`
	PrimaryAdmin           *PrimaryAdmin             `json:"primaryAdmin,omitempty"`
	ResourceUIURL          *string                   `json:"resourceUiUrl,omitempty"`
}
