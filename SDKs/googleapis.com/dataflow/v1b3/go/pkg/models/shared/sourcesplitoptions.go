package shared

type SourceSplitOptions struct {
	DesiredBundleSizeBytes *string `json:"desiredBundleSizeBytes"`
	DesiredShardSizeBytes  *string `json:"desiredShardSizeBytes"`
}
