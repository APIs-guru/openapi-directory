package shared

type ErrorError struct {
	Details *string `json:"details"`
	Name    *string `json:"name"`
}

type Error struct {
	Error *ErrorError `json:"error"`
}
