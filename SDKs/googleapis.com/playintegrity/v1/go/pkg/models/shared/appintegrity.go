package shared

type AppIntegrityAppRecognitionVerdictEnum string

const (
	AppIntegrityAppRecognitionVerdictEnumUnknown             AppIntegrityAppRecognitionVerdictEnum = "UNKNOWN"
	AppIntegrityAppRecognitionVerdictEnumPlayRecognized      AppIntegrityAppRecognitionVerdictEnum = "PLAY_RECOGNIZED"
	AppIntegrityAppRecognitionVerdictEnumUnrecognizedVersion AppIntegrityAppRecognitionVerdictEnum = "UNRECOGNIZED_VERSION"
	AppIntegrityAppRecognitionVerdictEnumUnevaluated         AppIntegrityAppRecognitionVerdictEnum = "UNEVALUATED"
)

// AppIntegrity
// Contains the application integrity information.
type AppIntegrity struct {
	AppRecognitionVerdict   *AppIntegrityAppRecognitionVerdictEnum `json:"appRecognitionVerdict,omitempty"`
	CertificateSha256Digest []string                               `json:"certificateSha256Digest,omitempty"`
	PackageName             *string                                `json:"packageName,omitempty"`
	VersionCode             *string                                `json:"versionCode,omitempty"`
}
