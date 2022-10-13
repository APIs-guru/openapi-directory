package shared

type LocationInputModel struct {
	Address       *AddressInputModel          `json:"address"`
	AdminEmail    *string                     `json:"adminEmail"`
	AdminName     *string                     `json:"adminName"`
	BusinessHours *BusinessHoursInputModel    `json:"businessHours"`
	Defaults      *BusinessDefaultsInputModel `json:"defaults"`
	Email         *string                     `json:"email"`
	Fax           *string                     `json:"fax"`
	FriendlyID    *string                     `json:"friendlyId"`
	MaxCapacity   *int32                      `json:"maxCapacity"`
	MaxGroupSize  *int32                      `json:"maxGroupSize"`
	Name          *string                     `json:"name"`
	Phone         *string                     `json:"phone"`
	RegionID      *string                     `json:"regionId"`
	Settings      *OnlineSettingsInputModel   `json:"settings"`
	TimezoneName  *string                     `json:"timezoneName"`
	Website       *string                     `json:"website"`
}
