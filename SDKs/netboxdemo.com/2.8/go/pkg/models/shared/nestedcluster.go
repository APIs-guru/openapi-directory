package shared

type NestedCluster struct {
	ID                  *int64  `json:"id"`
	Name                string  `json:"name"`
	URL                 *string `json:"url"`
	VirtualmachineCount *int64  `json:"virtualmachine_count"`
}
