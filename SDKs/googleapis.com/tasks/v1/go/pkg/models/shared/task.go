package shared

type TaskLinks struct {
	Description *string `json:"description"`
	Link        *string `json:"link"`
	Type        *string `json:"type"`
}

type Task struct {
	Completed *string     `json:"completed"`
	Deleted   *bool       `json:"deleted"`
	Due       *string     `json:"due"`
	Etag      *string     `json:"etag"`
	Hidden    *bool       `json:"hidden"`
	ID        *string     `json:"id"`
	Kind      *string     `json:"kind"`
	Links     []TaskLinks `json:"links"`
	Notes     *string     `json:"notes"`
	Parent    *string     `json:"parent"`
	Position  *string     `json:"position"`
	SelfLink  *string     `json:"selfLink"`
	Status    *string     `json:"status"`
	Title     *string     `json:"title"`
	Updated   *string     `json:"updated"`
}
