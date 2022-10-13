package shared

type Redirect struct {
	Glob       *string `json:"glob"`
	Location   *string `json:"location"`
	Regex      *string `json:"regex"`
	StatusCode *int32  `json:"statusCode"`
}
