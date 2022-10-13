package shared

type SlsaCompleteness struct {
	Arguments   *bool `json:"arguments"`
	Environment *bool `json:"environment"`
	Materials   *bool `json:"materials"`
}
