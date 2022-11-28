package shared

// Actor
// An object containing information about the effective user and authenticated principal responsible for an action.
type Actor struct {
	DisplayName   *string `json:"displayName,omitempty"`
	Email         *string `json:"email,omitempty"`
	GoogleSupport *bool   `json:"googleSupport,omitempty"`
}

// ActorInput
// An object containing information about the effective user and authenticated principal responsible for an action.
type ActorInput struct {
	DisplayName *string `json:"displayName,omitempty"`
	Email       *string `json:"email,omitempty"`
}
