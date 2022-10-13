package shared

type TaskList struct {
	Etag     *string `json:"etag"`
	ID       *string `json:"id"`
	Kind     *string `json:"kind"`
	SelfLink *string `json:"selfLink"`
	Title    *string `json:"title"`
	Updated  *string `json:"updated"`
}
