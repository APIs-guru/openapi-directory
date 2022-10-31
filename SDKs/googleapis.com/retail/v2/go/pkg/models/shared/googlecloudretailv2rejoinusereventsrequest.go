package shared

type GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum string

const (
	GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnumUserEventRejoinScopeUnspecified GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
	GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnumJoinedEvents                    GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum = "JOINED_EVENTS"
	GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnumUnjoinedEvents                  GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum = "UNJOINED_EVENTS"
)

type GoogleCloudRetailV2RejoinUserEventsRequest struct {
	UserEventRejoinScope *GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum `json:"userEventRejoinScope,omitempty"`
}
