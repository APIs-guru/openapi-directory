package shared

// Links
// A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).
type Links struct {
	Href *string `json:"href,omitempty"`
}
