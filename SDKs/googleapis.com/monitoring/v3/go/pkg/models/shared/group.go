package shared

type Group struct {
	DisplayName *string `json:"displayName"`
	Filter      *string `json:"filter"`
	IsCluster   *bool   `json:"isCluster"`
	Name        *string `json:"name"`
	ParentName  *string `json:"parentName"`
}
