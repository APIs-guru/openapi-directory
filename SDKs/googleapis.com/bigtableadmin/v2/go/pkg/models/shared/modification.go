package shared

// Modification
// A create, update, or delete of a particular column family.
type Modification struct {
	Create *ColumnFamily `json:"create,omitempty"`
	Drop   *bool         `json:"drop,omitempty"`
	ID     *string       `json:"id,omitempty"`
	Update *ColumnFamily `json:"update,omitempty"`
}
