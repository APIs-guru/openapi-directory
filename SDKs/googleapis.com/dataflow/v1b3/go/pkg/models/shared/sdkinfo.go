package shared

type SdkInfoLanguageEnum string

const (
	SdkInfoLanguageEnumUnknown SdkInfoLanguageEnum = "UNKNOWN"
	SdkInfoLanguageEnumJava    SdkInfoLanguageEnum = "JAVA"
	SdkInfoLanguageEnumPython  SdkInfoLanguageEnum = "PYTHON"
	SdkInfoLanguageEnumGo      SdkInfoLanguageEnum = "GO"
)

type SdkInfo struct {
	Language *SdkInfoLanguageEnum `json:"language,omitempty"`
	Version  *string              `json:"version,omitempty"`
}
