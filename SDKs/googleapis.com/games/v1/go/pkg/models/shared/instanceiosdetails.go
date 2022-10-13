package shared

type InstanceIosDetails struct {
	BundleIdentifier   *string `json:"bundleIdentifier"`
	ItunesAppID        *string `json:"itunesAppId"`
	Kind               *string `json:"kind"`
	PreferredForIpad   *bool   `json:"preferredForIpad"`
	PreferredForIphone *bool   `json:"preferredForIphone"`
	SupportIpad        *bool   `json:"supportIpad"`
	SupportIphone      *bool   `json:"supportIphone"`
}
