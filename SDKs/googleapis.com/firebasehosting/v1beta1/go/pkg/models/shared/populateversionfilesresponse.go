package shared

type PopulateVersionFilesResponse struct {
	UploadRequiredHashes []string `json:"uploadRequiredHashes"`
	UploadURL            *string  `json:"uploadUrl"`
}
