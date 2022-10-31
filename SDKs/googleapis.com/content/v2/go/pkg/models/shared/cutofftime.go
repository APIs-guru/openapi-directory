package shared

type CutoffTime struct {
	Hour     *int64  `json:"hour,omitempty"`
	Minute   *int64  `json:"minute,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
}
