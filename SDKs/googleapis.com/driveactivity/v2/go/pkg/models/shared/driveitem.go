package shared

// DriveItem
// A Drive item, such as a file or folder.
type DriveItem struct {
	DriveFile   map[string]interface{} `json:"driveFile,omitempty"`
	DriveFolder *DriveFolder           `json:"driveFolder,omitempty"`
	File        map[string]interface{} `json:"file,omitempty"`
	Folder      *Folder                `json:"folder,omitempty"`
	MimeType    *string                `json:"mimeType,omitempty"`
	Name        *string                `json:"name,omitempty"`
	Owner       *Owner                 `json:"owner,omitempty"`
	Title       *string                `json:"title,omitempty"`
}
