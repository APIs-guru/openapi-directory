package shared

type Borders struct {
	Bottom *Border `json:"bottom"`
	Left   *Border `json:"left"`
	Right  *Border `json:"right"`
	Top    *Border `json:"top"`
}
