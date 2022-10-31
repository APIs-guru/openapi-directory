package shared




type IntegratorCardPayloadResponseResponseVersionEnum string

const (
    IntegratorCardPayloadResponseResponseVersionEnumV1 IntegratorCardPayloadResponseResponseVersionEnum = "v1"
IntegratorCardPayloadResponseResponseVersionEnumV3 IntegratorCardPayloadResponseResponseVersionEnum = "v3"
)


type IntegratorCardPayloadResponse struct {
    AllItemsLinkURL *string `json:"allItemsLinkUrl,omitempty"`
    CardLabel *string `json:"cardLabel,omitempty"`
    ResponseVersion *IntegratorCardPayloadResponseResponseVersionEnum `json:"responseVersion,omitempty"`
    Sections []IntegratorObjectResult `json:"sections,omitempty"`
    TopLevelActions *TopLevelActions `json:"topLevelActions,omitempty"`
    TotalCount int32 `json:"totalCount"`
    
}

