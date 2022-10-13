package shared

type IosModelFormFactorEnum string

const (
	IosModelFormFactorEnumDeviceFormFactorUnspecified IosModelFormFactorEnum = "DEVICE_FORM_FACTOR_UNSPECIFIED"
	IosModelFormFactorEnumPhone                       IosModelFormFactorEnum = "PHONE"
	IosModelFormFactorEnumTablet                      IosModelFormFactorEnum = "TABLET"
	IosModelFormFactorEnumWearable                    IosModelFormFactorEnum = "WEARABLE"
)

type IosModel struct {
	DeviceCapabilities  []string                `json:"deviceCapabilities"`
	FormFactor          *IosModelFormFactorEnum `json:"formFactor"`
	ID                  *string                 `json:"id"`
	Name                *string                 `json:"name"`
	ScreenDensity       *int32                  `json:"screenDensity"`
	ScreenX             *int32                  `json:"screenX"`
	ScreenY             *int32                  `json:"screenY"`
	SupportedVersionIds []string                `json:"supportedVersionIds"`
	Tags                []string                `json:"tags"`
}
