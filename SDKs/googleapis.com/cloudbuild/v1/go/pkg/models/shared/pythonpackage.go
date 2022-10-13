package shared

type PythonPackage struct {
	Paths      []string `json:"paths"`
	Repository *string  `json:"repository"`
}
