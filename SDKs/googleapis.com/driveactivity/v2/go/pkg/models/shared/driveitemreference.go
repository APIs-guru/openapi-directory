package shared



type DriveItemReference struct {
    DriveFile map[string]interface{} `json:"driveFile,omitempty"`
    DriveFolder *DriveFolder `json:"driveFolder,omitempty"`
    File map[string]interface{} `json:"file,omitempty"`
    Folder *Folder `json:"folder,omitempty"`
    Name *string `json:"name,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

