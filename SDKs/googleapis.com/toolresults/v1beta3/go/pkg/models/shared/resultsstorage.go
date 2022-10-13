package shared

type ResultsStorage struct {
	ResultsStoragePath *FileReference `json:"resultsStoragePath"`
	XunitXMLFile       *FileReference `json:"xunitXmlFile"`
}
