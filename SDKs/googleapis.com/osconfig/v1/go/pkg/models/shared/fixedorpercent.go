package shared

type FixedOrPercent struct {
	Fixed   *int32 `json:"fixed"`
	Percent *int32 `json:"percent"`
}
