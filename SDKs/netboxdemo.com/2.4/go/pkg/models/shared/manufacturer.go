package shared

type Manufacturer struct {
	ID   *int64 `json:"id,omitempty"`
	Name string `json:"name"`
	Slug string `json:"slug"`
}

type ManufacturerInput struct {
	Name string `json:"name"`
	Slug string `json:"slug"`
}
