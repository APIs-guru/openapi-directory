package shared

type DataplexConfig struct {
	LakeResources map[string]Lake `json:"lakeResources,omitempty"`
}
