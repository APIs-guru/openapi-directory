package shared

type SDKInfoLanguageEnum string

const (
	SdkInfoLanguageEnumUnknown SDKInfoLanguageEnum = "UNKNOWN"
	SdkInfoLanguageEnumJava    SDKInfoLanguageEnum = "JAVA"
	SdkInfoLanguageEnumPython  SDKInfoLanguageEnum = "PYTHON"
	SdkInfoLanguageEnumGo      SDKInfoLanguageEnum = "GO"
)

// SDKInfo
// SDK Information.
type SDKInfo struct {
	Language *SDKInfoLanguageEnum `json:"language,omitempty"`
	Version  *string              `json:"version,omitempty"`
}
