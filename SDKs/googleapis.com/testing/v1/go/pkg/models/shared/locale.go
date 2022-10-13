package shared

type Locale struct {
	ID     *string  `json:"id"`
	Name   *string  `json:"name"`
	Region *string  `json:"region"`
	Tags   []string `json:"tags"`
}
