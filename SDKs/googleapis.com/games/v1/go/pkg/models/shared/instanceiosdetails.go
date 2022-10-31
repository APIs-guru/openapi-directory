package shared

type InstanceIosDetails struct {
	BundleIdentifier   *string `json:"bundleIdentifier,omitempty"`
	ItunesAppID        *string `json:"itunesAppId,omitempty"`
	Kind               *string `json:"kind,omitempty"`
	PreferredForIpad   *bool   `json:"preferredForIpad,omitempty"`
	PreferredForIphone *bool   `json:"preferredForIphone,omitempty"`
	SupportIpad        *bool   `json:"supportIpad,omitempty"`
	SupportIphone      *bool   `json:"supportIphone,omitempty"`
}
