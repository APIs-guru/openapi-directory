package shared

type PopulateVersionFilesResponse struct {
	UploadRequiredHashes []string `json:"uploadRequiredHashes,omitempty"`
	UploadURL            *string  `json:"uploadUrl,omitempty"`
}
