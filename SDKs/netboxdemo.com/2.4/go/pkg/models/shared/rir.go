package shared

type Rir struct {
	ID        *int64 `json:"id"`
	IsPrivate *bool  `json:"is_private"`
	Name      string `json:"name"`
	Slug      string `json:"slug"`
}
