package shared

type ScreenshotCluster struct {
	Activity  *string  `json:"activity"`
	ClusterID *string  `json:"clusterId"`
	KeyScreen *Screen  `json:"keyScreen"`
	Screens   []Screen `json:"screens"`
}
