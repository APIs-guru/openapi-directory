package shared

type Module struct {
	BuildID *TruncatableString `json:"buildId"`
	Module  *TruncatableString `json:"module"`
}
