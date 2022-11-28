package shared

type ServiceAreaBusinessBusinessTypeEnum string

const (
	ServiceAreaBusinessBusinessTypeEnumBusinessTypeUnspecified     ServiceAreaBusinessBusinessTypeEnum = "BUSINESS_TYPE_UNSPECIFIED"
	ServiceAreaBusinessBusinessTypeEnumCustomerLocationOnly        ServiceAreaBusinessBusinessTypeEnum = "CUSTOMER_LOCATION_ONLY"
	ServiceAreaBusinessBusinessTypeEnumCustomerAndBusinessLocation ServiceAreaBusinessBusinessTypeEnum = "CUSTOMER_AND_BUSINESS_LOCATION"
)

// ServiceAreaBusiness
// Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
type ServiceAreaBusiness struct {
	BusinessType *ServiceAreaBusinessBusinessTypeEnum `json:"businessType,omitempty"`
	Places       *Places                              `json:"places,omitempty"`
	Radius       *PointRadius                         `json:"radius,omitempty"`
}
