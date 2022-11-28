package shared

// GoogleCloudDataplexV1AssetDiscoveryStatusStats
// The aggregated data statistics for the asset reported by discovery.
type GoogleCloudDataplexV1AssetDiscoveryStatusStats struct {
	DataItems *string `json:"dataItems,omitempty"`
	DataSize  *string `json:"dataSize,omitempty"`
	Filesets  *string `json:"filesets,omitempty"`
	Tables    *string `json:"tables,omitempty"`
}
