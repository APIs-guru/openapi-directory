package operations

type UpdateNetworkFirmwareUpgradesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion struct {
	ID *string `json:"id,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade struct {
	Time      *string                                                                        `json:"time,omitempty"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion `json:"toVersion,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade `json:"nextUpgrade,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion struct {
	ID *string `json:"id,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade struct {
	Time      *string                                                                     `json:"time,omitempty"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion `json:"toVersion,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade `json:"nextUpgrade,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion struct {
	ID *string `json:"id,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade struct {
	Time      *string                                                                              `json:"time,omitempty"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion `json:"toVersion,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade `json:"nextUpgrade,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion struct {
	ID *string `json:"id,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade struct {
	Time      *string                                                                            `json:"time,omitempty"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion `json:"toVersion,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade `json:"nextUpgrade,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion struct {
	ID *string `json:"id,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade struct {
	Time      *string                                                                     `json:"time,omitempty"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion `json:"toVersion,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade `json:"nextUpgrade,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion struct {
	ID *string `json:"id,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade struct {
	Time      *string                                                                     `json:"time,omitempty"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion `json:"toVersion,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch struct {
	NextUpgrade                  *UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade `json:"nextUpgrade,omitempty"`
	ParticipateInNextBetaRelease *bool                                                              `json:"participateInNextBetaRelease,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion struct {
	ID *string `json:"id,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade struct {
	Time      *string                                                                      `json:"time,omitempty"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion `json:"toVersion,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade `json:"nextUpgrade,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion struct {
	ID *string `json:"id,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade struct {
	Time      *string                                                                       `json:"time,omitempty"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion `json:"toVersion,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade `json:"nextUpgrade,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProducts struct {
	Appliance       *UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance       `json:"appliance,omitempty"`
	Camera          *UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera          `json:"camera,omitempty"`
	CellularGateway *UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway `json:"cellularGateway,omitempty"`
	Environmental   *UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental   `json:"environmental,omitempty"`
	Sensor          *UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor          `json:"sensor,omitempty"`
	Switch          *UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch          `json:"switch,omitempty"`
	VmxHost         *UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost         `json:"vmxHost,omitempty"`
	Wireless        *UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless        `json:"wireless,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum string

const (
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumSun       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "sun"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumMon       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "mon"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumTue       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "tue"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumWed       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "wed"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumThu       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "thu"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumFri       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "fri"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumSat       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "sat"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumSunday    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "sunday"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumMonday    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "monday"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumTuesday   UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "tuesday"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumWednesday UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "wednesday"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumThursday  UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "thursday"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumFriday    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "friday"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumSaturday  UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = "saturday"
)

type UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum string

const (
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumZero00        UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "0:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumOne00         UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "1:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumTwo00         UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "2:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumThree00       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "3:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumFour00        UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "4:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumFive00        UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "5:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumSix00         UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "6:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumSeven00       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "7:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumEight00       UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "8:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumNine00        UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "9:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumTen00         UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "10:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumEleven00      UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "11:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumTwelve00      UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "12:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumThirteen00    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "13:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumFourteen00    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "14:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumFifteen00     UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "15:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumSixteen00     UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "16:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumSeventeen00   UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "17:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumEighteen00    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "18:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumNineteen00    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "19:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumTwenty00      UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "20:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumTwentyOne00   UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "21:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumTwentyTwo00   UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "22:00"
	UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumTwentyThree00 UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = "23:00"
)

type UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow struct {
	DayOfWeek *UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum `json:"dayOfWeek,omitempty"`
	HourOfDay *UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum `json:"hourOfDay,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequestBody struct {
	Products      *UpdateNetworkFirmwareUpgradesRequestBodyProducts      `json:"products,omitempty"`
	Timezone      *string                                                `json:"timezone,omitempty"`
	UpgradeWindow *UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow `json:"upgradeWindow,omitempty"`
}

type UpdateNetworkFirmwareUpgradesRequest struct {
	PathParams UpdateNetworkFirmwareUpgradesPathParams
	Request    *UpdateNetworkFirmwareUpgradesRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkFirmwareUpgradesResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	UpdateNetworkFirmwareUpgrades200ApplicationJSONObject map[string]interface{}
}
