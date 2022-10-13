package shared

type StatusDetails struct {
	Causes            []StatusCause `json:"causes"`
	Group             *string       `json:"group"`
	Kind              *string       `json:"kind"`
	Name              *string       `json:"name"`
	RetryAfterSeconds *int32        `json:"retryAfterSeconds"`
	UID               *string       `json:"uid"`
}
