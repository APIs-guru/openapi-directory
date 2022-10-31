package shared



type PythonPackage struct {
    Paths []string `json:"paths,omitempty"`
    Repository *string `json:"repository,omitempty"`
    
}

