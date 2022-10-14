package shared

type PublishXunitXMLFilesRequest struct {
	XunitXMLFiles []FileReference `json:"xunitXmlFiles,omitempty"`
}
