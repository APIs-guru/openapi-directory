package shared

type SdkInfoLanguageEnum string

const (
	SdkInfoLanguageEnumUnknown SdkInfoLanguageEnum = "UNKNOWN"
	SdkInfoLanguageEnumJava    SdkInfoLanguageEnum = "JAVA"
	SdkInfoLanguageEnumPython  SdkInfoLanguageEnum = "PYTHON"
	SdkInfoLanguageEnumGo      SdkInfoLanguageEnum = "GO"
)

type SdkInfo struct {
	Language *SdkInfoLanguageEnum `json:"language"`
	Version  *string              `json:"version"`
}
