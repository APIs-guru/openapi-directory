package shared

type CutoffTime struct {
	Hour     *int64  `json:"hour"`
	Minute   *int64  `json:"minute"`
	Timezone *string `json:"timezone"`
}
