package shared




type IosModelFormFactorEnum string

const (
    IosModelFormFactorEnumDeviceFormFactorUnspecified IosModelFormFactorEnum = "DEVICE_FORM_FACTOR_UNSPECIFIED"
IosModelFormFactorEnumPhone IosModelFormFactorEnum = "PHONE"
IosModelFormFactorEnumTablet IosModelFormFactorEnum = "TABLET"
IosModelFormFactorEnumWearable IosModelFormFactorEnum = "WEARABLE"
)


type IosModel struct {
    DeviceCapabilities []string `json:"deviceCapabilities,omitempty"`
    FormFactor *IosModelFormFactorEnum `json:"formFactor,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    ScreenDensity *int32 `json:"screenDensity,omitempty"`
    ScreenX *int32 `json:"screenX,omitempty"`
    ScreenY *int32 `json:"screenY,omitempty"`
    SupportedVersionIds []string `json:"supportedVersionIds,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

