package shared

type VoiceOptionsCoveredDataEnum string

const (
	VoiceOptionsCoveredDataEnumCoveredDataUnspecified VoiceOptionsCoveredDataEnum = "COVERED_DATA_UNSPECIFIED"
	VoiceOptionsCoveredDataEnumTextMessages           VoiceOptionsCoveredDataEnum = "TEXT_MESSAGES"
	VoiceOptionsCoveredDataEnumVoicemails             VoiceOptionsCoveredDataEnum = "VOICEMAILS"
	VoiceOptionsCoveredDataEnumCallLogs               VoiceOptionsCoveredDataEnum = "CALL_LOGS"
)

// VoiceOptions
// Additional options for Voice search
type VoiceOptions struct {
	CoveredData []VoiceOptionsCoveredDataEnum `json:"coveredData,omitempty"`
}
