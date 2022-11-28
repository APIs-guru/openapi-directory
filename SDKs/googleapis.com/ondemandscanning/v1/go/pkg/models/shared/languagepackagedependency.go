package shared

// LanguagePackageDependency
// Indicates a language package available between this package and the customer's resource artifact.
type LanguagePackageDependency struct {
	Package *string `json:"package,omitempty"`
	Version *string `json:"version,omitempty"`
}
