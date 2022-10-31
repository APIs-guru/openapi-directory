package shared



type CreateShortDynamicLinkRequest struct {
    DynamicLinkInfo *DynamicLinkInfo `json:"dynamicLinkInfo,omitempty"`
    LongDynamicLink *string `json:"longDynamicLink,omitempty"`
    SdkVersion *string `json:"sdkVersion,omitempty"`
    Suffix *Suffix `json:"suffix,omitempty"`
    
}

