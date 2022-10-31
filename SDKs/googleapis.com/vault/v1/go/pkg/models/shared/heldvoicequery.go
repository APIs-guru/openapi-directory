package shared




type HeldVoiceQueryCoveredDataEnum string

const (
    HeldVoiceQueryCoveredDataEnumCoveredDataUnspecified HeldVoiceQueryCoveredDataEnum = "COVERED_DATA_UNSPECIFIED"
HeldVoiceQueryCoveredDataEnumTextMessages HeldVoiceQueryCoveredDataEnum = "TEXT_MESSAGES"
HeldVoiceQueryCoveredDataEnumVoicemails HeldVoiceQueryCoveredDataEnum = "VOICEMAILS"
HeldVoiceQueryCoveredDataEnumCallLogs HeldVoiceQueryCoveredDataEnum = "CALL_LOGS"
)


type HeldVoiceQuery struct {
    CoveredData []HeldVoiceQueryCoveredDataEnum `json:"coveredData,omitempty"`
    
}

