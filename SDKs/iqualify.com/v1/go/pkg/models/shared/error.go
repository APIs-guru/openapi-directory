package shared

type ErrorError struct {
	Details *string `json:"details,omitempty"`
	Name    *string `json:"name,omitempty"`
}

type Error struct {
	Error *ErrorError `json:"error,omitempty"`
}
