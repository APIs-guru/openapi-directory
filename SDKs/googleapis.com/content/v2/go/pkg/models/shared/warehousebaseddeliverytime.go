package shared

type WarehouseBasedDeliveryTime struct {
	Carrier                  *string `json:"carrier,omitempty"`
	CarrierService           *string `json:"carrierService,omitempty"`
	OriginAdministrativeArea *string `json:"originAdministrativeArea,omitempty"`
	OriginCity               *string `json:"originCity,omitempty"`
	OriginCountry            *string `json:"originCountry,omitempty"`
	OriginPostalCode         *string `json:"originPostalCode,omitempty"`
	OriginStreetAddress      *string `json:"originStreetAddress,omitempty"`
	WarehouseName            *string `json:"warehouseName,omitempty"`
}
