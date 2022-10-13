package shared

type Manufacturer struct {
	ID   *int64 `json:"id"`
	Name string `json:"name"`
	Slug string `json:"slug"`
}
