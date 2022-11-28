package shared

// SavedQueryInput
// A saved query which can be shared with others or used later.
type SavedQueryInput struct {
	Content     *QueryContent     `json:"content,omitempty"`
	Description *string           `json:"description,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
}

// SavedQuery
// A saved query which can be shared with others or used later.
type SavedQuery struct {
	Content        *QueryContent     `json:"content,omitempty"`
	CreateTime     *string           `json:"createTime,omitempty"`
	Creator        *string           `json:"creator,omitempty"`
	Description    *string           `json:"description,omitempty"`
	Labels         map[string]string `json:"labels,omitempty"`
	LastUpdateTime *string           `json:"lastUpdateTime,omitempty"`
	LastUpdater    *string           `json:"lastUpdater,omitempty"`
	Name           *string           `json:"name,omitempty"`
}
