package shared

type Post struct {
	DivisionID         string `json:"division_id"`
	Label              string `json:"label"`
	MaximumMemberships int64  `json:"maximum_memberships"`
	Role               string `json:"role"`
}
