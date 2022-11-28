package shared

// DataplexConfig
// Specifies how metastore metadata should be integrated with the Dataplex service.
type DataplexConfig struct {
	LakeResources map[string]Lake `json:"lakeResources,omitempty"`
}
