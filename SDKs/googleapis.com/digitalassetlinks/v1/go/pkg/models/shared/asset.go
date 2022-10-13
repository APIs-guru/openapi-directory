package shared

type Asset struct {
	AndroidApp *AndroidAppAsset `json:"androidApp"`
	Web        *WebAsset        `json:"web"`
}
