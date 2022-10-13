package shared

type CreateManagedShortLinkRequest struct {
	DynamicLinkInfo *DynamicLinkInfo `json:"dynamicLinkInfo"`
	LongDynamicLink *string          `json:"longDynamicLink"`
	Name            *string          `json:"name"`
	SdkVersion      *string          `json:"sdkVersion"`
	Suffix          *Suffix          `json:"suffix"`
}
