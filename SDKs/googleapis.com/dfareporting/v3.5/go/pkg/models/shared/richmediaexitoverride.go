package shared

type RichMediaExitOverride struct {
	ClickThroughURL *ClickThroughURL `json:"clickThroughUrl"`
	Enabled         *bool            `json:"enabled"`
	ExitID          *string          `json:"exitId"`
}
