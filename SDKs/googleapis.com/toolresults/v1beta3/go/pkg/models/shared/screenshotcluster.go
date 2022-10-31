package shared



type ScreenshotCluster struct {
    Activity *string `json:"activity,omitempty"`
    ClusterID *string `json:"clusterId,omitempty"`
    KeyScreen *Screen `json:"keyScreen,omitempty"`
    Screens []Screen `json:"screens,omitempty"`
    
}

