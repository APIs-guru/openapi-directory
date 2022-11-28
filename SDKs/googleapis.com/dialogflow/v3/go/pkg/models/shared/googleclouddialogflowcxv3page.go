package shared

// GoogleCloudDialogflowCxV3PageInput
// A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
type GoogleCloudDialogflowCxV3PageInput struct {
	DisplayName           *string                                         `json:"displayName,omitempty"`
	EntryFulfillment      *GoogleCloudDialogflowCxV3FulfillmentInput      `json:"entryFulfillment,omitempty"`
	EventHandlers         []GoogleCloudDialogflowCxV3EventHandlerInput    `json:"eventHandlers,omitempty"`
	Form                  *GoogleCloudDialogflowCxV3FormInput             `json:"form,omitempty"`
	Name                  *string                                         `json:"name,omitempty"`
	TransitionRouteGroups []string                                        `json:"transitionRouteGroups,omitempty"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3TransitionRouteInput `json:"transitionRoutes,omitempty"`
}

// GoogleCloudDialogflowCxV3Page
// A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
type GoogleCloudDialogflowCxV3Page struct {
	DisplayName           *string                                    `json:"displayName,omitempty"`
	EntryFulfillment      *GoogleCloudDialogflowCxV3Fulfillment      `json:"entryFulfillment,omitempty"`
	EventHandlers         []GoogleCloudDialogflowCxV3EventHandler    `json:"eventHandlers,omitempty"`
	Form                  *GoogleCloudDialogflowCxV3Form             `json:"form,omitempty"`
	Name                  *string                                    `json:"name,omitempty"`
	TransitionRouteGroups []string                                   `json:"transitionRouteGroups,omitempty"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3TransitionRoute `json:"transitionRoutes,omitempty"`
}
