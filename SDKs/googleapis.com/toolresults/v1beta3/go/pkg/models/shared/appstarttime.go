package shared

type AppStartTime struct {
	FullyDrawnTime     *Duration `json:"fullyDrawnTime"`
	InitialDisplayTime *Duration `json:"initialDisplayTime"`
}
