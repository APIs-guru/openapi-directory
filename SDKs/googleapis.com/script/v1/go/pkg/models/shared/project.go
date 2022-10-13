package shared

type Project struct {
	CreateTime     *string                   `json:"createTime"`
	Creator        *GoogleAppsScriptTypeUser `json:"creator"`
	LastModifyUser *GoogleAppsScriptTypeUser `json:"lastModifyUser"`
	ParentID       *string                   `json:"parentId"`
	ScriptID       *string                   `json:"scriptId"`
	Title          *string                   `json:"title"`
	UpdateTime     *string                   `json:"updateTime"`
}
