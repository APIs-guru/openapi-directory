package shared

// Asset
// Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
type Asset struct {
	AndroidApp *AndroidAppAsset `json:"androidApp,omitempty"`
	Web        *WebAsset        `json:"web,omitempty"`
}
