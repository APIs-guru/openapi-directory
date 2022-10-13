package shared

type GoogleCloudDataplexV1Content struct {
	CreateTime  *string                                `json:"createTime"`
	DataText    *string                                `json:"dataText"`
	Description *string                                `json:"description"`
	Labels      map[string]string                      `json:"labels"`
	Name        *string                                `json:"name"`
	Notebook    *GoogleCloudDataplexV1ContentNotebook  `json:"notebook"`
	Path        *string                                `json:"path"`
	SQLScript   *GoogleCloudDataplexV1ContentSQLScript `json:"sqlScript"`
	UID         *string                                `json:"uid"`
	UpdateTime  *string                                `json:"updateTime"`
}
