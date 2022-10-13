package shared

type ShippingMethodFieldsTypeEnum string

const (
	ShippingMethodFieldsTypeEnumFree         ShippingMethodFieldsTypeEnum = "free"
	ShippingMethodFieldsTypeEnumTables       ShippingMethodFieldsTypeEnum = "tables"
	ShippingMethodFieldsTypeEnumCorreiosbr   ShippingMethodFieldsTypeEnum = "correiosbr"
	ShippingMethodFieldsTypeEnumCorreosChile ShippingMethodFieldsTypeEnum = "correos_chile"
	ShippingMethodFieldsTypeEnumChilexpress  ShippingMethodFieldsTypeEnum = "chilexpress"
	ShippingMethodFieldsTypeEnumFlat         ShippingMethodFieldsTypeEnum = "flat"
	ShippingMethodFieldsTypeEnumUps          ShippingMethodFieldsTypeEnum = "ups"
	ShippingMethodFieldsTypeEnumExternal     ShippingMethodFieldsTypeEnum = "external"
)

type ShippingMethodFields struct {
	CallbackURL      *string                       `json:"callback_url"`
	City             *string                       `json:"city"`
	FetchServicesURL *string                       `json:"fetch_services_url"`
	ID               *int32                        `json:"id"`
	Name             *string                       `json:"name"`
	Postal           *string                       `json:"postal"`
	Services         []ShippingService             `json:"services"`
	State            *string                       `json:"state"`
	Type             *ShippingMethodFieldsTypeEnum `json:"type"`
}
