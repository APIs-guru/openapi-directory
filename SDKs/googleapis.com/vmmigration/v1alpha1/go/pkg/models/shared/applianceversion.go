package shared

// ApplianceVersion
// Describes an appliance version.
type ApplianceVersion struct {
	Critical        *bool   `json:"critical,omitempty"`
	ReleaseNotesURI *string `json:"releaseNotesUri,omitempty"`
	URI             *string `json:"uri,omitempty"`
	Version         *string `json:"version,omitempty"`
}
