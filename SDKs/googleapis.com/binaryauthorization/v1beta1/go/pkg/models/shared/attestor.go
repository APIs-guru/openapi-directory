package shared

type Attestor struct {
	Description          *string               `json:"description"`
	Etag                 *string               `json:"etag"`
	Name                 *string               `json:"name"`
	UpdateTime           *string               `json:"updateTime"`
	UserOwnedDrydockNote *UserOwnedDrydockNote `json:"userOwnedDrydockNote"`
}
