package shared



type FileOccurrence struct {
    Attributions []string `json:"attributions,omitempty"`
    Comment *string `json:"comment,omitempty"`
    Contributors []string `json:"contributors,omitempty"`
    Copyright *string `json:"copyright,omitempty"`
    FilesLicenseInfo []string `json:"filesLicenseInfo,omitempty"`
    ID *string `json:"id,omitempty"`
    LicenseConcluded *License `json:"licenseConcluded,omitempty"`
    Notice *string `json:"notice,omitempty"`
    
}

