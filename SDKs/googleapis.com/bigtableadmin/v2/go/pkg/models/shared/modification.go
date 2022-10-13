package shared

type Modification struct {
	Create *ColumnFamily `json:"create"`
	Drop   *bool         `json:"drop"`
	ID     *string       `json:"id"`
	Update *ColumnFamily `json:"update"`
}
