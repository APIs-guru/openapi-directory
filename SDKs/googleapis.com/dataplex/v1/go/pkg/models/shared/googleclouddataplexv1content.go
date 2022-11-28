package shared

// GoogleCloudDataplexV1Content
// Content represents a user-visible notebook or a sql script
type GoogleCloudDataplexV1Content struct {
	CreateTime  *string                                `json:"createTime,omitempty"`
	DataText    *string                                `json:"dataText,omitempty"`
	Description *string                                `json:"description,omitempty"`
	Labels      map[string]string                      `json:"labels,omitempty"`
	Name        *string                                `json:"name,omitempty"`
	Notebook    *GoogleCloudDataplexV1ContentNotebook  `json:"notebook,omitempty"`
	Path        *string                                `json:"path,omitempty"`
	SQLScript   *GoogleCloudDataplexV1ContentSQLScript `json:"sqlScript,omitempty"`
	UID         *string                                `json:"uid,omitempty"`
	UpdateTime  *string                                `json:"updateTime,omitempty"`
}

// GoogleCloudDataplexV1ContentInput
// Content represents a user-visible notebook or a sql script
type GoogleCloudDataplexV1ContentInput struct {
	DataText    *string                                `json:"dataText,omitempty"`
	Description *string                                `json:"description,omitempty"`
	Labels      map[string]string                      `json:"labels,omitempty"`
	Notebook    *GoogleCloudDataplexV1ContentNotebook  `json:"notebook,omitempty"`
	Path        *string                                `json:"path,omitempty"`
	SQLScript   *GoogleCloudDataplexV1ContentSQLScript `json:"sqlScript,omitempty"`
}
