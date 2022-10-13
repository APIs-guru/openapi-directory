package shared

type AlloyDbSettings struct {
	InitialUser             *UserPassword            `json:"initialUser"`
	Labels                  map[string]string        `json:"labels"`
	PrimaryInstanceSettings *PrimaryInstanceSettings `json:"primaryInstanceSettings"`
	VpcNetwork              *string                  `json:"vpcNetwork"`
}
