package shared

// ColumnFamily
// A set of columns within a table which share a common configuration.
type ColumnFamily struct {
	GcRule *GcRule            `json:"gcRule,omitempty"`
	Stats  *ColumnFamilyStats `json:"stats,omitempty"`
}
