package shared

type WritableVlanGroup struct {
	ID   *int64 `json:"id,omitempty"`
	Name string `json:"name"`
	Site *int64 `json:"site,omitempty"`
	Slug string `json:"slug"`
}
