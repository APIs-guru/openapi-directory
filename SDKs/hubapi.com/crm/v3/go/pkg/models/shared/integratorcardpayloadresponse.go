package shared

type IntegratorCardPayloadResponseResponseVersionEnum string

const (
	IntegratorCardPayloadResponseResponseVersionEnumV1 IntegratorCardPayloadResponseResponseVersionEnum = "v1"
	IntegratorCardPayloadResponseResponseVersionEnumV3 IntegratorCardPayloadResponseResponseVersionEnum = "v3"
)

type IntegratorCardPayloadResponse struct {
	AllItemsLinkURL *string                                           `json:"allItemsLinkUrl"`
	CardLabel       *string                                           `json:"cardLabel"`
	ResponseVersion *IntegratorCardPayloadResponseResponseVersionEnum `json:"responseVersion"`
	Sections        []IntegratorObjectResult                          `json:"sections"`
	TopLevelActions *TopLevelActions                                  `json:"topLevelActions"`
	TotalCount      int32                                             `json:"totalCount"`
}
