package shared

// CollapsibleGroup
// A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.
type CollapsibleGroup struct {
	Collapsed *bool `json:"collapsed,omitempty"`
}
