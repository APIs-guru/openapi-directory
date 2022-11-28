package shared

type IntegratorCardPayloadResponseResponseVersionEnum string

const (
	IntegratorCardPayloadResponseResponseVersionEnumV1 IntegratorCardPayloadResponseResponseVersionEnum = "v1"
	IntegratorCardPayloadResponseResponseVersionEnumV3 IntegratorCardPayloadResponseResponseVersionEnum = "v3"
)

// IntegratorCardPayloadResponse
// The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page.
type IntegratorCardPayloadResponse struct {
	AllItemsLinkURL *string                                           `json:"allItemsLinkUrl,omitempty"`
	CardLabel       *string                                           `json:"cardLabel,omitempty"`
	ResponseVersion *IntegratorCardPayloadResponseResponseVersionEnum `json:"responseVersion,omitempty"`
	Sections        []IntegratorObjectResult                          `json:"sections,omitempty"`
	TopLevelActions *TopLevelActions                                  `json:"topLevelActions,omitempty"`
	TotalCount      int32                                             `json:"totalCount"`
}
