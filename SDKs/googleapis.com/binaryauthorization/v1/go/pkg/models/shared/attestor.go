package shared

// AttestorInput
// An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
type AttestorInput struct {
	Description          *string                    `json:"description,omitempty"`
	Etag                 *string                    `json:"etag,omitempty"`
	Name                 *string                    `json:"name,omitempty"`
	UserOwnedGrafeasNote *UserOwnedGrafeasNoteInput `json:"userOwnedGrafeasNote,omitempty"`
}

// Attestor
// An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
type Attestor struct {
	Description          *string               `json:"description,omitempty"`
	Etag                 *string               `json:"etag,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	UpdateTime           *string               `json:"updateTime,omitempty"`
	UserOwnedGrafeasNote *UserOwnedGrafeasNote `json:"userOwnedGrafeasNote,omitempty"`
}
