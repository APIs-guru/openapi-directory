package shared



type ResultsStorage struct {
    ResultsStoragePath *FileReference `json:"resultsStoragePath,omitempty"`
    XunitXMLFile *FileReference `json:"xunitXmlFile,omitempty"`
    
}

