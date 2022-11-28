package shared

// PublishXunitXMLFilesRequest
// Request message for StepService.PublishXunitXmlFiles.
type PublishXunitXMLFilesRequest struct {
	XunitXMLFiles []FileReference `json:"xunitXmlFiles,omitempty"`
}
