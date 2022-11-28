package shared

// PythonPackage
// Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
type PythonPackage struct {
	Paths      []string `json:"paths,omitempty"`
	Repository *string  `json:"repository,omitempty"`
}
