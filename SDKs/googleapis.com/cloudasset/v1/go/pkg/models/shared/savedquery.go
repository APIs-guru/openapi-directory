package shared

type SavedQuery struct {
	Content        *QueryContent     `json:"content"`
	CreateTime     *string           `json:"createTime"`
	Creator        *string           `json:"creator"`
	Description    *string           `json:"description"`
	Labels         map[string]string `json:"labels"`
	LastUpdateTime *string           `json:"lastUpdateTime"`
	LastUpdater    *string           `json:"lastUpdater"`
	Name           *string           `json:"name"`
}
