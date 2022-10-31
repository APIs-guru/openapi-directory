package shared




type PollItemsRequestStatusCodesEnum string

const (
    PollItemsRequestStatusCodesEnumCodeUnspecified PollItemsRequestStatusCodesEnum = "CODE_UNSPECIFIED"
PollItemsRequestStatusCodesEnumError PollItemsRequestStatusCodesEnum = "ERROR"
PollItemsRequestStatusCodesEnumModified PollItemsRequestStatusCodesEnum = "MODIFIED"
PollItemsRequestStatusCodesEnumNewItem PollItemsRequestStatusCodesEnum = "NEW_ITEM"
PollItemsRequestStatusCodesEnumAccepted PollItemsRequestStatusCodesEnum = "ACCEPTED"
)


type PollItemsRequest struct {
    ConnectorName *string `json:"connectorName,omitempty"`
    DebugOptions *DebugOptions `json:"debugOptions,omitempty"`
    Limit *int32 `json:"limit,omitempty"`
    Queue *string `json:"queue,omitempty"`
    StatusCodes []PollItemsRequestStatusCodesEnum `json:"statusCodes,omitempty"`
    
}

