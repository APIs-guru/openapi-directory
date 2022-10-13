package shared

type WarehouseBasedDeliveryTime struct {
	Carrier                  *string `json:"carrier"`
	CarrierService           *string `json:"carrierService"`
	OriginAdministrativeArea *string `json:"originAdministrativeArea"`
	OriginCity               *string `json:"originCity"`
	OriginCountry            *string `json:"originCountry"`
	OriginPostalCode         *string `json:"originPostalCode"`
	OriginStreetAddress      *string `json:"originStreetAddress"`
	WarehouseName            *string `json:"warehouseName"`
}
