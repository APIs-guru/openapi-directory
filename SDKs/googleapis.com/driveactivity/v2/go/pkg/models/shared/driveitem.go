package shared

type DriveItem struct {
	DriveFile   map[string]interface{} `json:"driveFile"`
	DriveFolder *DriveFolder           `json:"driveFolder"`
	File        map[string]interface{} `json:"file"`
	Folder      *Folder                `json:"folder"`
	MimeType    *string                `json:"mimeType"`
	Name        *string                `json:"name"`
	Owner       *Owner                 `json:"owner"`
	Title       *string                `json:"title"`
}
