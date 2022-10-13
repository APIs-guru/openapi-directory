package shared

type PollItemsRequestStatusCodesEnum string

const (
	PollItemsRequestStatusCodesEnumCodeUnspecified PollItemsRequestStatusCodesEnum = "CODE_UNSPECIFIED"
	PollItemsRequestStatusCodesEnumError           PollItemsRequestStatusCodesEnum = "ERROR"
	PollItemsRequestStatusCodesEnumModified        PollItemsRequestStatusCodesEnum = "MODIFIED"
	PollItemsRequestStatusCodesEnumNewItem         PollItemsRequestStatusCodesEnum = "NEW_ITEM"
	PollItemsRequestStatusCodesEnumAccepted        PollItemsRequestStatusCodesEnum = "ACCEPTED"
)

type PollItemsRequest struct {
	ConnectorName *string                           `json:"connectorName"`
	DebugOptions  *DebugOptions                     `json:"debugOptions"`
	Limit         *int32                            `json:"limit"`
	Queue         *string                           `json:"queue"`
	StatusCodes   []PollItemsRequestStatusCodesEnum `json:"statusCodes"`
}
