package shared

type CreateShortDynamicLinkRequest struct {
	DynamicLinkInfo *DynamicLinkInfo `json:"dynamicLinkInfo"`
	LongDynamicLink *string          `json:"longDynamicLink"`
	SdkVersion      *string          `json:"sdkVersion"`
	Suffix          *Suffix          `json:"suffix"`
}
