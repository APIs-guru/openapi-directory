package shared

type ServiceAreaBusinessBusinessTypeEnum string

const (
	ServiceAreaBusinessBusinessTypeEnumBusinessTypeUnspecified     ServiceAreaBusinessBusinessTypeEnum = "BUSINESS_TYPE_UNSPECIFIED"
	ServiceAreaBusinessBusinessTypeEnumCustomerLocationOnly        ServiceAreaBusinessBusinessTypeEnum = "CUSTOMER_LOCATION_ONLY"
	ServiceAreaBusinessBusinessTypeEnumCustomerAndBusinessLocation ServiceAreaBusinessBusinessTypeEnum = "CUSTOMER_AND_BUSINESS_LOCATION"
)

type ServiceAreaBusiness struct {
	BusinessType *ServiceAreaBusinessBusinessTypeEnum `json:"businessType,omitempty"`
	Places       *Places                              `json:"places,omitempty"`
	RegionCode   *string                              `json:"regionCode,omitempty"`
}
