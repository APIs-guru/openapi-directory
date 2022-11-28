package shared

// AlloyDbSettings
// Settings for creating an AlloyDB cluster.
type AlloyDbSettings struct {
	InitialUser             *UserPassword            `json:"initialUser,omitempty"`
	Labels                  map[string]string        `json:"labels,omitempty"`
	PrimaryInstanceSettings *PrimaryInstanceSettings `json:"primaryInstanceSettings,omitempty"`
	VpcNetwork              *string                  `json:"vpcNetwork,omitempty"`
}

// AlloyDbSettingsInput
// Settings for creating an AlloyDB cluster.
type AlloyDbSettingsInput struct {
	InitialUser             *UserPasswordInput            `json:"initialUser,omitempty"`
	Labels                  map[string]string             `json:"labels,omitempty"`
	PrimaryInstanceSettings *PrimaryInstanceSettingsInput `json:"primaryInstanceSettings,omitempty"`
	VpcNetwork              *string                       `json:"vpcNetwork,omitempty"`
}
