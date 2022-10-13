package shared

type ApplianceVersion struct {
	Critical        *bool   `json:"critical"`
	ReleaseNotesURI *string `json:"releaseNotesUri"`
	URI             *string `json:"uri"`
	Version         *string `json:"version"`
}
