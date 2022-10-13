package shared

type GoogleCloudSecuritycenterV1Binding struct {
	Name     *string   `json:"name"`
	Ns       *string   `json:"ns"`
	Role     *Role     `json:"role"`
	Subjects []Subject `json:"subjects"`
}
