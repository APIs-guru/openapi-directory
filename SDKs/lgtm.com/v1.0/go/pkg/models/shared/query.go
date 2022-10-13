package shared

type Query struct {
	ID         *int64           `json:"id"`
	Language   *string          `json:"language"`
	Name       *string          `json:"name"`
	Pack       *string          `json:"pack"`
	Properties *QueryProperties `json:"properties"`
	URL        *string          `json:"url"`
}
