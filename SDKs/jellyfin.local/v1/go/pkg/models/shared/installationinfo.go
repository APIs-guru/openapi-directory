package shared

type InstallationInfo struct {
	Changelog *string  `json:"Changelog,omitempty"`
	Checksum  *string  `json:"Checksum,omitempty"`
	GUID      *string  `json:"Guid,omitempty"`
	Name      *string  `json:"Name,omitempty"`
	SourceURL *string  `json:"SourceUrl,omitempty"`
	Version   *Version `json:"Version,omitempty"`
}
