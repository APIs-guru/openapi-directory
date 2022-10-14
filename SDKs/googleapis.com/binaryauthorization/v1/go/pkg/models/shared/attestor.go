package shared

type Attestor struct {
	Description          *string               `json:"description,omitempty"`
	Etag                 *string               `json:"etag,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	UpdateTime           *string               `json:"updateTime,omitempty"`
	UserOwnedGrafeasNote *UserOwnedGrafeasNote `json:"userOwnedGrafeasNote,omitempty"`
}
