package shared

type OutdatedLibrary struct {
	LearnMoreUrls []string `json:"learnMoreUrls"`
	LibraryName   *string  `json:"libraryName"`
	Version       *string  `json:"version"`
}
