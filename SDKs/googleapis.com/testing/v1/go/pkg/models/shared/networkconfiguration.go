package shared

type NetworkConfiguration struct {
	DownRule *TrafficRule `json:"downRule,omitempty"`
	ID       *string      `json:"id,omitempty"`
	UpRule   *TrafficRule `json:"upRule,omitempty"`
}
