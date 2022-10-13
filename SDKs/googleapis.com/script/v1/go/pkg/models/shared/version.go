package shared

type Version struct {
	CreateTime    *string `json:"createTime"`
	Description   *string `json:"description"`
	ScriptID      *string `json:"scriptId"`
	VersionNumber *int32  `json:"versionNumber"`
}
