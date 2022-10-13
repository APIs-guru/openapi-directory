package shared

type HolidaysHoliday struct {
	CountryCode           *string `json:"countryCode"`
	Date                  *string `json:"date"`
	DeliveryGuaranteeDate *string `json:"deliveryGuaranteeDate"`
	DeliveryGuaranteeHour *string `json:"deliveryGuaranteeHour"`
	ID                    *string `json:"id"`
	Type                  *string `json:"type"`
}
