package shared

// OutdatedLibrary
// Information reported for an outdated library.
type OutdatedLibrary struct {
	LearnMoreUrls []string `json:"learnMoreUrls,omitempty"`
	LibraryName   *string  `json:"libraryName,omitempty"`
	Version       *string  `json:"version,omitempty"`
}
