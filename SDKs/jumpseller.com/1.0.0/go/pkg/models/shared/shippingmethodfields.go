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
	CallbackURL      *string                       `json:"callback_url,omitempty"`
	City             *string                       `json:"city,omitempty"`
	FetchServicesURL *string                       `json:"fetch_services_url,omitempty"`
	ID               *int32                        `json:"id,omitempty"`
	Name             *string                       `json:"name,omitempty"`
	Postal           *string                       `json:"postal,omitempty"`
	Services         []ShippingService             `json:"services,omitempty"`
	State            *string                       `json:"state,omitempty"`
	Type             *ShippingMethodFieldsTypeEnum `json:"type,omitempty"`
}
