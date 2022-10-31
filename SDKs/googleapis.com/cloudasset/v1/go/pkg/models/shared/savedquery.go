package shared

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
