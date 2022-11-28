package shared

// ResultsStorage
// The storage for test results.
type ResultsStorage struct {
	ResultsStoragePath *FileReference `json:"resultsStoragePath,omitempty"`
	XunitXMLFile       *FileReference `json:"xunitXmlFile,omitempty"`
}
