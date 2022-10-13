package shared

type MetaCommunicationMediumEnum string

const (
	MetaCommunicationMediumEnumMobile MetaCommunicationMediumEnum = "MOBILE"
	MetaCommunicationMediumEnumEmail  MetaCommunicationMediumEnum = "EMAIL"
)

type Meta struct {
	CommunicationExpiry *string                      `json:"communicationExpiry"`
	CommunicationHint   *string                      `json:"communicationHint"`
	CommunicationMedium *MetaCommunicationMediumEnum `json:"communicationMedium"`
}
