package shared



type Asset struct {
    AndroidApp *AndroidAppAsset `json:"androidApp,omitempty"`
    Web *WebAsset `json:"web,omitempty"`
    
}

