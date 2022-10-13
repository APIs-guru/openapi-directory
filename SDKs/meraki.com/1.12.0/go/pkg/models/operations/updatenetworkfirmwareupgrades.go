package operations

type UpdateNetworkFirmwareUpgradesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion struct {
	ID *string `json:"id"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade struct {
	Time      *string                                                                        `json:"time"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion `json:"toVersion"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade `json:"nextUpgrade"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion struct {
	ID *string `json:"id"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade struct {
	Time      *string                                                                     `json:"time"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion `json:"toVersion"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade `json:"nextUpgrade"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion struct {
	ID *string `json:"id"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade struct {
	Time      *string                                                                              `json:"time"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion `json:"toVersion"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade `json:"nextUpgrade"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion struct {
	ID *string `json:"id"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade struct {
	Time      *string                                                                            `json:"time"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion `json:"toVersion"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade `json:"nextUpgrade"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion struct {
	ID *string `json:"id"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade struct {
	Time      *string                                                                     `json:"time"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion `json:"toVersion"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade `json:"nextUpgrade"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion struct {
	ID *string `json:"id"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade struct {
	Time      *string                                                                     `json:"time"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion `json:"toVersion"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch struct {
	NextUpgrade                  *UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade `json:"nextUpgrade"`
	ParticipateInNextBetaRelease *bool                                                              `json:"participateInNextBetaRelease"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion struct {
	ID *string `json:"id"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade struct {
	Time      *string                                                                      `json:"time"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion `json:"toVersion"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade `json:"nextUpgrade"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion struct {
	ID *string `json:"id"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade struct {
	Time      *string                                                                       `json:"time"`
	ToVersion *UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion `json:"toVersion"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless struct {
	NextUpgrade *UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade `json:"nextUpgrade"`
}

type UpdateNetworkFirmwareUpgradesRequestBodyProducts struct {
	Appliance       *UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance       `json:"appliance"`
	Camera          *UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera          `json:"camera"`
	CellularGateway *UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway `json:"cellularGateway"`
	Environmental   *UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental   `json:"environmental"`
	Sensor          *UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor          `json:"sensor"`
	Switch          *UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch          `json:"switch"`
	VmxHost         *UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost         `json:"vmxHost"`
	Wireless        *UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless        `json:"wireless"`
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
	DayOfWeek *UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum `json:"dayOfWeek"`
	HourOfDay *UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum `json:"hourOfDay"`
}

type UpdateNetworkFirmwareUpgradesRequestBody struct {
	Products      *UpdateNetworkFirmwareUpgradesRequestBodyProducts      `json:"products"`
	Timezone      *string                                                `json:"timezone"`
	UpgradeWindow *UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow `json:"upgradeWindow"`
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
