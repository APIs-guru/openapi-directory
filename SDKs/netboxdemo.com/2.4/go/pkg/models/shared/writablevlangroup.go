package shared

type WritableVlanGroupInput struct {
	Name string `json:"name"`
	Site *int64 `json:"site,omitempty"`
	Slug string `json:"slug"`
}
