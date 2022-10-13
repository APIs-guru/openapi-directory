package shared

type AppIntegrityAppRecognitionVerdictEnum string

const (
	AppIntegrityAppRecognitionVerdictEnumUnknown             AppIntegrityAppRecognitionVerdictEnum = "UNKNOWN"
	AppIntegrityAppRecognitionVerdictEnumPlayRecognized      AppIntegrityAppRecognitionVerdictEnum = "PLAY_RECOGNIZED"
	AppIntegrityAppRecognitionVerdictEnumUnrecognizedVersion AppIntegrityAppRecognitionVerdictEnum = "UNRECOGNIZED_VERSION"
	AppIntegrityAppRecognitionVerdictEnumUnevaluated         AppIntegrityAppRecognitionVerdictEnum = "UNEVALUATED"
)

type AppIntegrity struct {
	AppRecognitionVerdict   *AppIntegrityAppRecognitionVerdictEnum `json:"appRecognitionVerdict"`
	CertificateSha256Digest []string                               `json:"certificateSha256Digest"`
	PackageName             *string                                `json:"packageName"`
	VersionCode             *string                                `json:"versionCode"`
}
