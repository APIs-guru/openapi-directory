package shared

type CreateManagedShortLinkRequest struct {
	DynamicLinkInfo *DynamicLinkInfo `json:"dynamicLinkInfo,omitempty"`
	LongDynamicLink *string          `json:"longDynamicLink,omitempty"`
	Name            *string          `json:"name,omitempty"`
	SdkVersion      *string          `json:"sdkVersion,omitempty"`
	Suffix          *Suffix          `json:"suffix,omitempty"`
}
