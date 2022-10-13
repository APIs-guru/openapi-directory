package shared

type AndroidModelFormEnum string

const (
	AndroidModelFormEnumDeviceFormUnspecified AndroidModelFormEnum = "DEVICE_FORM_UNSPECIFIED"
	AndroidModelFormEnumVirtual               AndroidModelFormEnum = "VIRTUAL"
	AndroidModelFormEnumPhysical              AndroidModelFormEnum = "PHYSICAL"
	AndroidModelFormEnumEmulator              AndroidModelFormEnum = "EMULATOR"
)

type AndroidModelFormFactorEnum string

const (
	AndroidModelFormFactorEnumDeviceFormFactorUnspecified AndroidModelFormFactorEnum = "DEVICE_FORM_FACTOR_UNSPECIFIED"
	AndroidModelFormFactorEnumPhone                       AndroidModelFormFactorEnum = "PHONE"
	AndroidModelFormFactorEnumTablet                      AndroidModelFormFactorEnum = "TABLET"
	AndroidModelFormFactorEnumWearable                    AndroidModelFormFactorEnum = "WEARABLE"
)

type AndroidModel struct {
	Brand                *string                     `json:"brand"`
	Codename             *string                     `json:"codename"`
	Form                 *AndroidModelFormEnum       `json:"form"`
	FormFactor           *AndroidModelFormFactorEnum `json:"formFactor"`
	ID                   *string                     `json:"id"`
	LowFpsVideoRecording *bool                       `json:"lowFpsVideoRecording"`
	Manufacturer         *string                     `json:"manufacturer"`
	Name                 *string                     `json:"name"`
	ScreenDensity        *int32                      `json:"screenDensity"`
	ScreenX              *int32                      `json:"screenX"`
	ScreenY              *int32                      `json:"screenY"`
	SupportedAbis        []string                    `json:"supportedAbis"`
	SupportedVersionIds  []string                    `json:"supportedVersionIds"`
	Tags                 []string                    `json:"tags"`
	ThumbnailURL         *string                     `json:"thumbnailUrl"`
}
