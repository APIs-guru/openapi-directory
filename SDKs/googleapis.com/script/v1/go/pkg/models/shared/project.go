package shared

// Project
// The script project resource.
type Project struct {
	CreateTime     *string                   `json:"createTime,omitempty"`
	Creator        *GoogleAppsScriptTypeUser `json:"creator,omitempty"`
	LastModifyUser *GoogleAppsScriptTypeUser `json:"lastModifyUser,omitempty"`
	ParentID       *string                   `json:"parentId,omitempty"`
	ScriptID       *string                   `json:"scriptId,omitempty"`
	Title          *string                   `json:"title,omitempty"`
	UpdateTime     *string                   `json:"updateTime,omitempty"`
}
