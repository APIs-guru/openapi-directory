package shared

type DeepLink struct {
	AppURL             *string    `json:"appUrl"`
	FallbackURL        *string    `json:"fallbackUrl"`
	Kind               *string    `json:"kind"`
	MobileApp          *MobileApp `json:"mobileApp"`
	RemarketingListIds []string   `json:"remarketingListIds"`
}
