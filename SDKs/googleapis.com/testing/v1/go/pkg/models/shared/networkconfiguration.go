package shared

type NetworkConfiguration struct {
	DownRule *TrafficRule `json:"downRule"`
	ID       *string      `json:"id"`
	UpRule   *TrafficRule `json:"upRule"`
}
