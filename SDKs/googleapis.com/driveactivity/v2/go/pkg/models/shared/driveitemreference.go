package shared

type DriveItemReference struct {
	DriveFile   map[string]interface{} `json:"driveFile"`
	DriveFolder *DriveFolder           `json:"driveFolder"`
	File        map[string]interface{} `json:"file"`
	Folder      *Folder                `json:"folder"`
	Name        *string                `json:"name"`
	Title       *string                `json:"title"`
}
