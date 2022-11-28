package shared

// SourceSplitOptions
// Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.
type SourceSplitOptions struct {
	DesiredBundleSizeBytes *string `json:"desiredBundleSizeBytes,omitempty"`
	DesiredShardSizeBytes  *string `json:"desiredShardSizeBytes,omitempty"`
}
