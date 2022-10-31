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
	Brand                *string                     `json:"brand,omitempty"`
	Codename             *string                     `json:"codename,omitempty"`
	Form                 *AndroidModelFormEnum       `json:"form,omitempty"`
	FormFactor           *AndroidModelFormFactorEnum `json:"formFactor,omitempty"`
	ID                   *string                     `json:"id,omitempty"`
	LowFpsVideoRecording *bool                       `json:"lowFpsVideoRecording,omitempty"`
	Manufacturer         *string                     `json:"manufacturer,omitempty"`
	Name                 *string                     `json:"name,omitempty"`
	ScreenDensity        *int32                      `json:"screenDensity,omitempty"`
	ScreenX              *int32                      `json:"screenX,omitempty"`
	ScreenY              *int32                      `json:"screenY,omitempty"`
	SupportedAbis        []string                    `json:"supportedAbis,omitempty"`
	SupportedVersionIds  []string                    `json:"supportedVersionIds,omitempty"`
	Tags                 []string                    `json:"tags,omitempty"`
	ThumbnailURL         *string                     `json:"thumbnailUrl,omitempty"`
}
