package shared

type ShippingsettingsGetSupportedHolidaysResponse struct {
	Holidays []HolidaysHoliday `json:"holidays"`
	Kind     *string           `json:"kind"`
}
