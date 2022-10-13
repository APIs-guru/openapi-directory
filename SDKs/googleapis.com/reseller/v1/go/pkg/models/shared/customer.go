package shared

type CustomerCustomerTypeEnum string

const (
	CustomerCustomerTypeEnumCustomerTypeUnspecified CustomerCustomerTypeEnum = "customerTypeUnspecified"
	CustomerCustomerTypeEnumDomain                  CustomerCustomerTypeEnum = "domain"
	CustomerCustomerTypeEnumTeam                    CustomerCustomerTypeEnum = "team"
)

type Customer struct {
	AlternateEmail         *string                   `json:"alternateEmail"`
	CustomerDomain         *string                   `json:"customerDomain"`
	CustomerDomainVerified *bool                     `json:"customerDomainVerified"`
	CustomerID             *string                   `json:"customerId"`
	CustomerType           *CustomerCustomerTypeEnum `json:"customerType"`
	Kind                   *string                   `json:"kind"`
	PhoneNumber            *string                   `json:"phoneNumber"`
	PostalAddress          *Address                  `json:"postalAddress"`
	PrimaryAdmin           *PrimaryAdmin             `json:"primaryAdmin"`
	ResourceUIURL          *string                   `json:"resourceUiUrl"`
}
