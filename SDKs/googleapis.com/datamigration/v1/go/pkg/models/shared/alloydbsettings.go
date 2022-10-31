package shared



type AlloyDbSettings struct {
    InitialUser *UserPassword `json:"initialUser,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    PrimaryInstanceSettings *PrimaryInstanceSettings `json:"primaryInstanceSettings,omitempty"`
    VpcNetwork *string `json:"vpcNetwork,omitempty"`
    
}

