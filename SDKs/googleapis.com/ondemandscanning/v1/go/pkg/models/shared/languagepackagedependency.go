package shared

type LanguagePackageDependency struct {
	Package *string `json:"package,omitempty"`
	Version *string `json:"version,omitempty"`
}
