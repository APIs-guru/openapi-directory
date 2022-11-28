package shared

// ByProducts
// Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value".
type ByProducts struct {
	CustomValues map[string]string `json:"customValues,omitempty"`
}
