package shared

type Tag struct {
	ID          *int64 `json:"id"`
	Name        string `json:"name"`
	Slug        string `json:"slug"`
	TaggedItems *int64 `json:"tagged_items"`
}
