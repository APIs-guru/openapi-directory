package shared

type MetaCommunicationMediumEnum string

const (
	MetaCommunicationMediumEnumMobile MetaCommunicationMediumEnum = "MOBILE"
	MetaCommunicationMediumEnumEmail  MetaCommunicationMediumEnum = "EMAIL"
)

type Meta struct {
	CommunicationExpiry *string                      `json:"communicationExpiry,omitempty"`
	CommunicationHint   *string                      `json:"communicationHint,omitempty"`
	CommunicationMedium *MetaCommunicationMediumEnum `json:"communicationMedium,omitempty"`
}
