package shared

// SavedColumnList
// A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.
type SavedColumnList struct {
	Items []SavedColumn `json:"items,omitempty"`
	Kind  *string       `json:"kind,omitempty"`
}
