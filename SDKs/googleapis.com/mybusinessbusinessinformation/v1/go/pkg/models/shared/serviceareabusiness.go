package shared

type ServiceAreaBusinessBusinessTypeEnum string

const (
	ServiceAreaBusinessBusinessTypeEnumBusinessTypeUnspecified     ServiceAreaBusinessBusinessTypeEnum = "BUSINESS_TYPE_UNSPECIFIED"
	ServiceAreaBusinessBusinessTypeEnumCustomerLocationOnly        ServiceAreaBusinessBusinessTypeEnum = "CUSTOMER_LOCATION_ONLY"
	ServiceAreaBusinessBusinessTypeEnumCustomerAndBusinessLocation ServiceAreaBusinessBusinessTypeEnum = "CUSTOMER_AND_BUSINESS_LOCATION"
)

type ServiceAreaBusiness struct {
	BusinessType *ServiceAreaBusinessBusinessTypeEnum `json:"businessType"`
	Places       *Places                              `json:"places"`
	RegionCode   *string                              `json:"regionCode"`
}
