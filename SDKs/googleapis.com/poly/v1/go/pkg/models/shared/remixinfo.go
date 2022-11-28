package shared

// RemixInfo
// Info about the sources of this asset (i.e. assets that were remixed to create this asset).
type RemixInfo struct {
	SourceAsset []string `json:"sourceAsset,omitempty"`
}
