package shared

type CustomerCustomerTypeEnum string

const (
	CustomerCustomerTypeEnumCustomerTypeUnspecified CustomerCustomerTypeEnum = "customerTypeUnspecified"
	CustomerCustomerTypeEnumDomain                  CustomerCustomerTypeEnum = "domain"
	CustomerCustomerTypeEnumTeam                    CustomerCustomerTypeEnum = "team"
)

// Customer
// When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address.
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
