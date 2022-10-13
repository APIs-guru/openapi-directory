package shared

type InstallationInfo struct {
	Changelog *string  `json:"Changelog"`
	Checksum  *string  `json:"Checksum"`
	GUID      *string  `json:"Guid"`
	Name      *string  `json:"Name"`
	SourceURL *string  `json:"SourceUrl"`
	Version   *Version `json:"Version"`
}
