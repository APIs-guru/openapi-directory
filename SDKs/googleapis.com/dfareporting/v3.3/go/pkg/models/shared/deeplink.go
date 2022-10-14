package shared

type DeepLink struct {
	AppURL             *string    `json:"appUrl,omitempty"`
	FallbackURL        *string    `json:"fallbackUrl,omitempty"`
	Kind               *string    `json:"kind,omitempty"`
	MobileApp          *MobileApp `json:"mobileApp,omitempty"`
	RemarketingListIds []string   `json:"remarketingListIds,omitempty"`
}
