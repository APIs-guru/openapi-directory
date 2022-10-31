package shared

type Info struct {
	Description   *string `json:"description,omitempty"`
	DocumentTitle *string `json:"documentTitle,omitempty"`
	Title         *string `json:"title,omitempty"`
}
